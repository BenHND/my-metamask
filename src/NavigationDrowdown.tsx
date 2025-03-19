import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuItem, Select, Box } from "@mui/material";

const NavigationDropdown: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box my={2}>
      <Select
        defaultValue="/wallet"
        onChange={(e) => navigate(e.target.value)}
        fullWidth
        variant="outlined"
        size="small"
      >
        <MenuItem value="/wallet">Create / import Wallet</MenuItem>
        <MenuItem value="/transaction-history">Recent Activity</MenuItem>
        <MenuItem value="/transaction">Send ETH</MenuItem>
        <MenuItem value="/network">Choose Network</MenuItem>
      </Select>
    </Box>
  );
};

export default NavigationDropdown;
