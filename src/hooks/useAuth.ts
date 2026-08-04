import { useContext } from "react";
import { AuthContext } from "../contexts/authContextValue";
import type { AuthContextType } from "../types/auth";

// Hook com guard: lança erro se usado fora do AuthProvider, tornando
// o erro imediato e descritivo em vez de um crash silencioso com null.
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
}
