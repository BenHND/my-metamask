import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import { WalletProvider } from "./Wallet/context/WalletProvider";
import { EthNetworkProvider } from "./Network/context/EthNetworkProvider";
import AppContent from "./AppContent";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#8bc34a",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <EthNetworkProvider>
        <WalletProvider>
          <Router>
            <AppContent />
          </Router>
        </WalletProvider>
      </EthNetworkProvider>
    </ThemeProvider>
  );
};

export default App;
