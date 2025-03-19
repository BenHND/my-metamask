import { useState } from "react";

import { useWallet } from "../context/WalletContext";
import {
  importWalletFromMnemonic,
  importWalletFromPrivateKey,
} from "../Wallet.api";

export const useImportWallet = () => {
  const { setWallet, updateBalance } = useWallet();
  const [error, setError] = useState<string | null>(null);

  const importWallet = (
    importType: "mnemonic" | "privateKey",
    inputValue: string
  ) => {
    setError(null);
    try {
      const wallet =
        importType === "mnemonic"
          ? importWalletFromMnemonic(inputValue)
          : importWalletFromPrivateKey(inputValue);

      setWallet(wallet);
      updateBalance();
    } catch (err) {
      setError("Invalid input. Please check and try again.");
      console.error("Wallet import failed:", err);
    }
  };

  return { importWallet, error };
};
