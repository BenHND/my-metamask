import { createContext, useContext } from "react";

import { WalletContextType } from "../Wallet.types";

export const WalletContext = createContext<WalletContextType | undefined>(
  undefined
);

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
