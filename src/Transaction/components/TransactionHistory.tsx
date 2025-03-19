import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
  Typography,
} from "@mui/material";

import { useTransactions } from "../hooks/useTransactions";

const weiToEther = (wei: string) => {
  return (parseInt(wei) / 1e18).toFixed(4);
};

const TransactionHistory: React.FC = () => {
  const { transactions, loading, error } = useTransactions();

  const formatTimestamp = (timestamp: number) => {
    if (isNaN(timestamp) || timestamp <= 0) {
      return "Invalid date";
    }
    return new Date(timestamp * 1000).toLocaleString();
  };

  return (
    <div>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && transactions.length === 0 && (
        <Typography>No transactions found.</Typography>
      )}

      {!loading && transactions.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Hash</TableCell>
                <TableCell>Amount (ETH)</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((tx) => (
                <TableRow key={tx.hash}>
                  <TableCell>{tx.hash.slice(0, 10)}...</TableCell>
                  <TableCell>{weiToEther(tx.value)} ETH</TableCell>
                  <TableCell>{formatTimestamp(tx.timeStamp)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default TransactionHistory;
