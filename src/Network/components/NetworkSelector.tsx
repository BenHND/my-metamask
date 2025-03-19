import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

import { useEthereumProvider } from "../context/EthNetworkContext";

const networks = {
  mainnet: "https://mainnet.infura.io/v3/",
  goerli: "https://goerli.infura.io/v3/",
  sepolia: "https://sepolia.infura.io/v3/",
};

const NetworkSelector: React.FC = () => {
  const { providerUrl, setProviderUrl } = useEthereumProvider();
  const [selectedNetwork, setSelectedNetwork] = useState<string>(providerUrl);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newUrl = event.target.value;
    setSelectedNetwork(newUrl);
    setProviderUrl(newUrl);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Network</InputLabel>
      <Select value={selectedNetwork} onChange={handleChange} size="small">
        {Object.entries(networks).map(([name, url]) => (
          <MenuItem key={name} value={url}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default NetworkSelector;
