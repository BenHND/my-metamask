import React, { useState } from "react";
import { ethers } from "ethers";

import { EthNetworkContext } from "./EthNetworkContext";

import { EthNetworkContextType } from "../Network.types";

const apiKey = import.meta.env.VITE_API_KEY;

export const EthNetworkProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [providerUrl, setProviderUrl] = useState<string>(
    "https://mainnet.infura.io/v3/"
  );
  const provider = new ethers.JsonRpcProvider(providerUrl + apiKey);

  const value: EthNetworkContextType = {
    providerUrl,
    provider,
    setProviderUrl,
  };

  return (
    <EthNetworkContext.Provider value={value}>
      {children}
    </EthNetworkContext.Provider>
  );
};
