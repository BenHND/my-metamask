import { useState } from "react";

import { useWallet } from "../context/WalletContext";
import { createWallet } from "../Wallet.api";

export const useCreateWallet = () => {
  const { setWallet, updateBalance } = useWallet();
  const [loading, setLoading] = useState(false);

  const generateWallet = () => {
    setLoading(true);
    const newWallet = createWallet();
    setWallet(newWallet);
    updateBalance();
    setLoading(false);
  };

  return { generateWallet, loading };
};
