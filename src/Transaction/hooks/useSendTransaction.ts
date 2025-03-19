import { useState } from "react";

import { useWallet } from "../../Wallet/context/WalletContext";
import { useEthereumProvider } from "../../Network/context/EthNetworkContext";
import { sendTransaction } from "../Transaction.api";

export const useSendTransaction = () => {
  const { wallet } = useWallet();
  const { provider } = useEthereumProvider();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);

  const send = async (recipient: string, amount: string) => {
    if (!wallet?.privateKey || !provider) {
      setError("Wallet or provider is missing.");
      return;
    }

    setLoading(true);
    setError(null);
    setTxHash(null);

    try {
      const hash = await sendTransaction(
        provider,
        wallet.privateKey,
        recipient,
        amount
      );
      setTxHash(hash);
    } catch (err) {
      setError("Transaction failed.");
    }

    setLoading(false);
  };

  return { send, loading, error, txHash };
};
