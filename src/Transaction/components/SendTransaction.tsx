import React, { useState } from "react";
import { TextField, Button, CircularProgress, Alert } from "@mui/material";

import { useSendTransaction } from "../hooks/useSendTransaction";

const SendTransaction: React.FC = () => {
  const { send, loading, error, txHash } = useSendTransaction();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div>
      <TextField
        label="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        fullWidth
        margin="normal"
        size="small"
      />
      <TextField
        label="Amount (ETH)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        margin="normal"
        size="small"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => send(recipient, amount)}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Send ETH"}
      </Button>

      {error && <Alert severity="error">{error}</Alert>}
      {txHash && (
        <Alert severity="success">Transaction sent! Hash: {txHash}</Alert>
      )}
    </div>
  );
};

export default SendTransaction;
