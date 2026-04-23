import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/authService";
import axios from "axios";

export function LoginPage() {
  const [cpf, setCpf] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
      setError("O CPF digitado precisa ter 11 dígitos numéricos");
      return;
    }

    if (password.length !== 6 || !/^\d+$/.test(password)) {
      setError("A senha digitada precisa ter 6 dígitos numéricos");
      return;
    }

    setError(null);

    try {
      const data = await login({ cpf, password });

      localStorage.setItem("token", data.token);

      setSuccess("Login feito com sucesso");
      setError(null);
    } catch (err: unknown) {
      setSuccess(null);

      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Erro ao fazer login");
      } else {
        setError("Erro inesperado");
      }
    }
  }

  return (
    <div>
      <h1>Bem-vindo ao Spendly</h1>

      <p>Faça login abaixo e acesse sua conta!</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="cpf">CPF</label>
        <input
          id="cpf"
          type="text"
          name="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Entrar</button>

        {success && <p>{success}</p>}
        {error && <p>{error}</p>}
      </form>

      <Link to="/forgot-password">Esqueci minha senha</Link>
      <Link to="/register">Não tem conta na Spendly? Cadastre-se</Link>
    </div>
  );
}
