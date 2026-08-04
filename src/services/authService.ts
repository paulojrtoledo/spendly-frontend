import { apiClient } from "../lib/apiClient";
import type { AuthResponse } from "../types/auth";

type LoginRequest = {
  cpf: string;
  password: string;
};

export async function login({ cpf, password }: LoginRequest) {
  const response = await apiClient.post<AuthResponse>("/auth/login", {
    cpf,
    password,
  });

  return response.data;
}

export async function createGuestSession(): Promise<AuthResponse> {
  const response = await apiClient.post<AuthResponse>("/auth/guest");

  return response.data;
}
