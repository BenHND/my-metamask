import React from "react";
import { Button, Typography, Box, CircularProgress } from "@mui/material";

import { useCreateWallet } from "../hooks/useCreateWallet";

const CreateWallet: React.FC = () => {
  const { generateWallet, loading } = useCreateWallet();

  return (
    <Box>
      <Typography variant="subtitle1">Create a New Wallet</Typography>
      <Button
        variant="contained"
        onClick={generateWallet}
        fullWidth
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Generate Wallet"}
      </Button>
    </Box>
  );
};

export default CreateWallet;
