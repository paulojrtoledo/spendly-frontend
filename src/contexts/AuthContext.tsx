import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import {
  createGuestSession,
  login as loginService,
} from "../services/authService";
import { createCustomer, getMe } from "../services/customerService";
import type { AuthContextType, AuthResponse, User } from "../types/auth";
import { AuthContext } from "./authContextValue";

// Chave única para o token no localStorage — centralizada aqui para evitar
// magic strings espalhadas pelo código.
const TOKEN_KEY = "token";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  // isLoading começa true para que as rotas aguardem a hidratação do token
  // antes de decidir redirecionar. Evita flash de redirect na inicialização.
  const [isLoading, setIsLoading] = useState(true);

  // Lê o token do localStorage e busca os dados do usuário autenticado.
  // Chamado uma vez na montagem do provider e exposto para uso externo
  // (ex.: após operações que alterem o perfil do usuário no futuro).
  const loadAuthenticatedUser = useCallback(async () => {
    const storedToken = localStorage.getItem(TOKEN_KEY);

    if (!storedToken) {
      setIsLoading(false);
      return;
    }

    try {
      const userData = await getMe();
      setToken(storedToken);
      setUser(userData);
    } catch {
      // Token inválido ou expirado: limpa o estado.
      localStorage.removeItem(TOKEN_KEY);
      setToken(null);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAuthenticatedUser();
  }, [loadAuthenticatedUser]);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUser(null);
  }, []);

  useEffect(() => {
    const handleLogoutEvent = () => {
      logout();
    };

    window.addEventListener("app-logout", handleLogoutEvent);
    return () => {
      window.removeEventListener("app-logout", handleLogoutEvent);
    };
  }, [logout]);

  const completeAuthentication = useCallback(async (data: AuthResponse) => {
    localStorage.setItem(TOKEN_KEY, data.token);
    setToken(data.token);
    // Busca os dados completos do usuário logo após o login para popular
    // o estado sem depender dos dados retornados pelo endpoint de auth.
    const userData = await getMe();
    setUser(userData);
  }, []);

  const login = useCallback(async (cpf: string, password: string) => {
    const data = await loginService({ cpf, password });
    await completeAuthentication(data);
  }, [completeAuthentication]);

  const loginAsGuest = useCallback(async () => {
    const data = await createGuestSession();
    await completeAuthentication(data);
  }, [completeAuthentication]);

  const register = useCallback(
    async (name: string, cpf: string, password: string, email: string) => {
      await createCustomer({ name, cpf, password, email });
      // Registro não retorna token — a página é responsável por redirecionar
      // para /login após esta promise resolver.
    },
    []
  );

  // useMemo evita recriar o objeto de contexto a cada render quando os
  // valores não mudaram, prevenindo re-renders desnecessários nos consumidores.
  const value = useMemo<AuthContextType>(
    () => ({
      user,
      token,
      isAuthenticated: user !== null && token !== null,
      isLoading,
      login,
      loginAsGuest,
      register,
      logout,
      loadAuthenticatedUser,
    }),
    [
      user,
      token,
      isLoading,
      login,
      loginAsGuest,
      register,
      logout,
      loadAuthenticatedUser,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
