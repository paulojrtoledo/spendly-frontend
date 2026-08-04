import { useEffect, useState } from "react";
import { transactionService } from "../services/transactionService";
import type { Transaction } from "../types/transaction";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import { ThemeToggle } from "../components/ThemeToggle";
import {
  getFriendlyApiErrorMessage,
  getReverseTransactionErrorMessage,
} from "../utils/apiError";

const REVERSE_CONFIRMATION_MESSAGE =
  "Deseja realmente estornar esta transação? O impacto financeiro será revertido e a transação continuará visível no histórico.";

export function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reverseError, setReverseError] = useState<string | null>(null);
  const [reverseSuccess, setReverseSuccess] = useState<string | null>(null);
  const [reversingIds, setReversingIds] = useState<number[]>([]);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const data = await transactionService.getTransactions();
      setTransactions(data);
    } catch (err) {
      setError(getFriendlyApiErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  function handleCreated(t: Transaction) {
    // prepend new transaction
    setTransactions((prev) => [t, ...prev]);
  }

  async function handleReverse(transaction: Transaction) {
    if (
      transaction.status === "REVERSED" ||
      reversingIds.includes(transaction.id) ||
      !window.confirm(REVERSE_CONFIRMATION_MESSAGE)
    ) {
      return;
    }

    setReverseError(null);
    setReverseSuccess(null);
    setReversingIds((current) => [...current, transaction.id]);

    try {
      const reversed = await transactionService.reverseTransaction(transaction.id);
      setTransactions((current) =>
        current.map((item) => (item.id === reversed.id ? reversed : item))
      );
      setReverseSuccess("Transação estornada com sucesso.");
    } catch (err) {
      setReverseError(getReverseTransactionErrorMessage(err));
    } finally {
      setReversingIds((current) =>
        current.filter((id) => id !== transaction.id)
      );
    }
  }

  return (
    <main className="app-page min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Movimentações
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight">Transações</h1>
            <p className="mt-2 text-[var(--color-muted)]">
              Registre e acompanhe entradas e saídas.
            </p>
          </div>
          <ThemeToggle />
        </header>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <TransactionForm onCreated={handleCreated} />
          </div>

          <section className="lg:col-span-2">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Histórico</h2>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                {transactions.length}{" "}
                {transactions.length === 1
                  ? "transação registrada"
                  : "transações registradas"}
              </p>
            </div>
            {reverseSuccess && (
              <p
                className="mb-4 rounded-lg border border-[var(--color-success)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-success)]"
                role="status"
              >
                {reverseSuccess}
              </p>
            )}
            {reverseError && (
              <p className="app-error mb-4 rounded-lg border px-4 py-3 text-sm" role="alert">
                {reverseError}
              </p>
            )}
            <TransactionList
              transactions={transactions}
              loading={loading}
              error={error}
              onReverse={handleReverse}
              reversingIds={reversingIds}
            />
          </section>
        </div>
      </div>
    </main>
  );
}

export default TransactionsPage;
