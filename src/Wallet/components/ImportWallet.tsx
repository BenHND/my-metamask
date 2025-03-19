import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Alert,
} from "@mui/material";
import { useImportWallet } from "../hooks/useImportWallet";

const ImportWallet: React.FC = () => {
  const [importType, setImportType] = useState<"mnemonic" | "privateKey">(
    "mnemonic"
  );
  const [inputValue, setInputValue] = useState("");
  const { importWallet, error } = useImportWallet();

  return (
    <Box mt={3}>
      <Typography variant="subtitle1">Import Wallet</Typography>

      <ToggleButtonGroup
        value={importType}
        exclusive
        onChange={(_, value) => value && setImportType(value)}
        fullWidth
        sx={{ mb: 2 }}
      >
        <ToggleButton value="mnemonic" size="small">
          Mnemonic
        </ToggleButton>
        <ToggleButton value="privateKey" size="small">
          Private Key
        </ToggleButton>
      </ToggleButtonGroup>

      <TextField
        label={importType === "mnemonic" ? "Mnemonic Phrase" : "Private Key"}
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        margin="normal"
        error={!!error}
        helperText={error}
        size="small"
      />

      {error && <Alert severity="error">{error}</Alert>}

      <Button
        variant="contained"
        onClick={() => importWallet(importType, inputValue)}
        fullWidth
        disabled={!inputValue}
      >
        Import Wallet
      </Button>
    </Box>
  );
};

export default ImportWallet;
