import { apiClient } from "../lib/apiClient";

type LoginRequest = {
  cpf: string;
  password: string;
};

type LoginResponse = {
  token: string;
  type: string;
};

export async function login({ cpf, password }: LoginRequest) {
  const response = await apiClient.post<LoginResponse>("/auth/login", {
    cpf,
    password,
  });

  return response.data;
}