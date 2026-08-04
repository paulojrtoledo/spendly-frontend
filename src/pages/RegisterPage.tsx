import { isAxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type ApiErrorResponse = {
  message: string;
  status: number;
  timestamp: string;
};

export function RegisterPage() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { register } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim()) {
      setError("Nome é obrigatório");
      return;
    }

    if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
      setError("CPF deve ter 11 dígitos numéricos");
      return;
    }

    if (password.length !== 6 || !/^\d+$/.test(password)) {
      setError("Senha deve ter 6 dígitos numéricos");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Email inválido");
      return;
    }

    try {
      setError(null);
      await register(name, cpf, password, email);
      navigate("/login");
    } catch (err) {
      if (isAxiosError<ApiErrorResponse>(err) && err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Erro ao criar conta. Tente novamente.");
      }
    }
  }

  return (
    <div>
      <h1>Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>CPF</label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {error && <p>{error}</p>}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
