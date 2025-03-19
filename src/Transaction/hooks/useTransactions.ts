import { useState, useEffect, useCallback } from "react";
import { useWallet } from "../../Wallet/context/WalletContext";
import { useEthereumProvider } from "../../Network/context/EthNetworkContext";
import { getTransactions } from "../Transaction.api";
import { Transaction } from "../Transaction.types";

export const useTransactions = () => {
  const { wallet } = useWallet();
  const { provider } = useEthereumProvider();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactions = useCallback(async () => {
    setLoading(true);
    if (!wallet?.address || !provider) {
      setLoading(false);
      setError("No wallet or provider selected.");
      return;
    }

    try {
      const txs = await getTransactions(wallet.address);
      setTransactions(txs);
      setError(null);
    } catch (err) {
      console.error("Error fetching transactions:", err);
      setError("Failed to load transactions. Please try again later.");
    }

    setLoading(false);
  }, [provider, wallet?.address]);

  useEffect(() => {
    if (!transactions.length) {
      fetchTransactions();
    }
  }, [fetchTransactions, transactions]);

  return { transactions, loading, error };
};
