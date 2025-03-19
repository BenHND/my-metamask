import React from "react";

import { WalletContext } from "./WalletContext";
import { useWalletActions } from "./WalletActions";

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const walletActions = useWalletActions();

  return (
    <WalletContext.Provider value={walletActions}>
      {children}
    </WalletContext.Provider>
  );
};
