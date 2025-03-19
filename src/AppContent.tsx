import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";

import WalletBalance from "./Wallet/components/WalletBalance";
import CreateWallet from "./Wallet/components/CreateWallet";
import ImportWallet from "./Wallet/components/ImportWallet";
import TransactionHistory from "./Transaction/components/TransactionHistory";
import SendTransaction from "./Transaction/components/SendTransaction";
import NetworkSelector from "./Network/components/NetworkSelector";
import Wallet from "./Wallet/components/Wallet";
import NavigationDropdown from "./NavigationDrowdown";

const AppContent: React.FC = () => {
  return (
    <Container>
      <div className="mt-2 mb-2">
        <Typography variant="h5" color="green" className="text-center">
          <strong>MY METAMASK</strong>
        </Typography>
      </div>
      <WalletBalance />
      <NavigationDropdown />
      <Routes>
        <Route path="/" element={<Navigate to="/wallet" replace />} />
        <Route
          path="/wallet"
          element={
            <>
              <Wallet />
              <CreateWallet />
              <ImportWallet />
            </>
          }
        />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/transaction" element={<SendTransaction />} />
        <Route path="/network" element={<NetworkSelector />} />
      </Routes>
    </Container>
  );
};

export default AppContent;
