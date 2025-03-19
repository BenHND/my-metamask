import { useState, useCallback } from "react";

import { useEthereumProvider } from "../../Network/context/EthNetworkContext";
import { getWalletBalance } from "../Wallet.api";

import { Wallet } from "../Wallet.types";

export const useWalletActions = () => {
  const { provider } = useEthereumProvider();
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateBalance = useCallback(async () => {
    if (!wallet?.address || !provider) {
      setError("Wallet or provider is missing.");
      setLoading(false);
      return;
    }
    setLoading(true);

    const balance = await getWalletBalance(provider, wallet.address);

    if (balance !== null) {
      setWallet((prevWallet) =>
        prevWallet ? { ...prevWallet, balance } : null
      );
      setError(null);
    } else {
      setError("Failed to fetch balance.");
    }
    setLoading(false);
  }, [wallet, provider]);

  return { wallet, setWallet, updateBalance, loading, error };
};
