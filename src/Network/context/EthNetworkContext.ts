import { createContext, useContext } from "react";

import { EthNetworkContextType } from "../Network.types";

export const EthNetworkContext = createContext<
  EthNetworkContextType | undefined
>(undefined);

export const useEthereumProvider = () => {
  const context = useContext(EthNetworkContext);
  if (!context) {
    throw new Error("useEthNetwork must be used within an EthNetworkProvider");
  }
  return context;
};
