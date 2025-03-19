import { ethers } from "ethers";

const API_KEY = import.meta.env.VITE_API_KEY_ETHERSCAN;

/**
 * Get transactions related to an address efficiently.
 */
export const getTransactions = async (address: string) => {
  try {
    const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Network error: ${errorMessage}`);
    }

    const data = await response.json();

    if (data.status !== "1") {
      throw new Error(`API error: ${data.message || "Unknown error"}`);
    }

    return data.result;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

/**
 * Send ETH to a specified address.
 */
export const sendTransaction = async (
  provider: ethers.JsonRpcProvider,
  privateKey: string,
  recipient: string,
  amount: string
): Promise<string> => {
  if (!recipient || !amount) {
    throw new Error("Recipient address and amount are required.");
  }

  try {
    const walletSigner = new ethers.Wallet(privateKey, provider);
    const tx = {
      to: recipient,
      value: ethers.parseEther(amount),
    };

    const transactionResponse = await walletSigner.sendTransaction(tx);
    await transactionResponse.wait();

    return transactionResponse.hash;
  } catch (error) {
    console.error("Transaction failed:", error);
    throw new Error("Failed to send transaction.");
  }
};
