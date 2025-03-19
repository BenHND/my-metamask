import React from "react";
import { CircularProgress, Alert, Typography } from "@mui/material";

import { useWallet } from "../context/WalletContext";

const WalletBalance: React.FC = () => {
  const { wallet, loading, error } = useWallet();

  return (
    <>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <div className="space-y-4 flex items-center justify-center w-full gap-3">
        <Typography variant="subtitle1">Wallet Balance:</Typography>
        {!loading && (
          <Typography variant="body1">
            {wallet?.balance || "0.0"} ETH
          </Typography>
        )}
      </div>
    </>
  );
};

export default WalletBalance;
