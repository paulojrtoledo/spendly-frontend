import axios from "axios";

export function getFriendlyApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const response = error.response;
    const data = response?.data as Record<string, unknown> | undefined;

    if (data?.message && typeof data.message === "string") {
      return data.message;
    }

    if (!response) {
      return "Não foi possível conectar ao servidor.";
    }

    switch (response.status) {
      case 400:
        return "Não foi possível processar sua solicitação.";
      case 401:
        return "Sua sessão expirou. Faça login novamente.";
      case 403:
        return "Você não tem permissão para realizar esta ação.";
      case 404:
        return "Recurso não encontrado.";
      case 500:
        return "Erro interno no servidor. Tente novamente mais tarde.";
      default:
        return response.statusText || "Ocorreu um erro ao processar sua solicitação.";
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Ocorreu um erro desconhecido.";
}

export function getReverseTransactionErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    switch (error.response?.status) {
      case 400:
        return "Saldo insuficiente para estornar esta receita.";
      case 404:
        return "Transação não encontrada.";
      case 409:
        return "Esta transação já foi estornada.";
    }
  }

  return getFriendlyApiErrorMessage(error);
}

export function getGuestAuthErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      return "Não foi possível conectar ao servidor.";
    }

    if (error.response.status === 503) {
      return "Não foi possível criar o acesso de visitante agora. Tente novamente.";
    }
  }

  return "Não foi possível entrar como visitante.";
}
