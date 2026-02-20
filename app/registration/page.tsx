"use client";

import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";

export default function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [idProof, setIdProof] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("registering", { name, email, password, dob, idProof });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) setIdProof(files[0]);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5" component="h1" align="center">Register</Typography>
          <TextField label="Full Name" value={name} onChange={(e) => setName(e.target.value)} required fullWidth />
          <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required fullWidth />
          <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required fullWidth />
          <TextField label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required fullWidth />
          <TextField label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} value={dob} onChange={(e) => setDob(e.target.value)} required fullWidth />
          <Input type="file" onChange={handleFile} inputProps={{ accept: "image/*,application/pdf" }} />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 1.5 }}>Register</Button>
        </Box>
      </Paper>
    </Container>
  );
}
