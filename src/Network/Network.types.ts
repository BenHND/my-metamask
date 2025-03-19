import { ethers } from "ethers";

export interface EthNetworkState {
  providerUrl: string;
  provider: ethers.JsonRpcProvider;
}

export interface EthNetworkContextType extends EthNetworkState {
  setProviderUrl: (url: string) => void;
}
