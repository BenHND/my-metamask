export interface Wallet {
  address: string;
  privateKey: string;
  mnemonic?: string | null;
  balance?: string;
}

export interface WalletContextType {
  wallet: Wallet | null;
  setWallet: (wallet: Wallet | null) => void;
  updateBalance: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

export interface BalanceResult {
  balance: string;
}
