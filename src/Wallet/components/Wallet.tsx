import {
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";

import { useWallet } from "../context/WalletContext";

const Wallet = () => {
  const { wallet, loading, error } = useWallet();

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Copied to clipboard"))
      .catch((err) => alert("Error copying: " + err));
  };

  return (
    <div className="mb-4">
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <div>
        <Typography variant="subtitle1">Address:</Typography>
        <div className="flex items-center space-x-2 w-full gap-3">
          <TextField
            value={wallet?.address || ""}
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiInputLabel-root": {
                display: "none",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
            disabled
            className="flex-1"
            size="small"
          />
          <Button
            onClick={() => handleCopy(wallet?.address || "")}
            variant="outlined"
            size="small"
            className="self-stretch"
          >
            Copy
          </Button>
        </div>
      </div>

      <div>
        <Typography variant="subtitle1">Private Key:</Typography>
        <div className="flex items-center space-x-2 w-full gap-3">
          <TextField
            value={wallet?.privateKey || ""}
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiInputLabel-root": {
                display: "none",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
            disabled
            className="flex-1"
            size="small"
          />
          <Button
            onClick={() => handleCopy(wallet?.privateKey || "")}
            variant="outlined"
            size="small"
            className="self-stretch"
          >
            Copy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
