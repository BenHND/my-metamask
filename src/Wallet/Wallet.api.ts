import { ethers } from "ethers";

/**
 * Generate a new Ethereum wallet
 */
export const createWallet = () => {
  const wallet = ethers.Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
    mnemonic: wallet.mnemonic?.phrase || null,
  };
};

/**
 * Import wallet from mnemonic
 */
export const importWalletFromMnemonic = (mnemonic: string) => {
  try {
    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    return {
      address: wallet.address,
      privateKey: wallet.privateKey,
    };
  } catch (error) {
    throw new Error("Invalid mnemonic phrase");
  }
};

/**
 * Import wallet from private key
 */
export const importWalletFromPrivateKey = (privateKey: string) => {
  try {
    const wallet = new ethers.Wallet(privateKey);
    return {
      address: wallet.address,
      privateKey: wallet.privateKey,
    };
  } catch (error) {
    throw new Error("Invalid private key");
  }
};

/**
 * Get wallet balance
 */
export const getWalletBalance = async (
  provider: ethers.JsonRpcProvider,
  address: string
): Promise<string | null> => {
  try {
    const balance = await provider.getBalance(address);
    return ethers.formatEther(balance);
  } catch (error) {
    console.error("Failed to fetch balance:", error);
    return null;
  }
};
