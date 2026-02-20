"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("logging in", { email, password });
  };

  return (
    <Container maxWidth="xs" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5" component="h1" align="center">Login</Typography>
          <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} required fullWidth />
          <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required fullWidth />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 1.5 }}>Login</Button>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, mt: 1 }}>
            <Link component={NextLink} href="/forgot-password">Forgot Password?</Link>
            <Link component={NextLink} href="/registration">New user? Register here</Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
