"use client";

import React, { useState } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    allergies: "",
    pastVaccinations: "",
    medicalHistory: "",
    currentMedications: "",
    emergencyContact: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("profile updated", formData);
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="h5" component="h1" align="center">
            Update Profile
          </Typography>

          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.dateOfBirth}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            multiline
            minRows={2}
          />

          <TextField
            label="Allergies"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            fullWidth
            multiline
            minRows={2}
            placeholder="List known allergies"
          />
          <TextField
            label="Past Vaccinations"
            name="pastVaccinations"
            value={formData.pastVaccinations}
            onChange={handleChange}
            fullWidth
            multiline
            minRows={2}
            placeholder="Mention past vaccinations"
          />
          <TextField
            label="Medical History"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            fullWidth
            multiline
            minRows={3}
            placeholder="Share relevant medical history"
          />
          <TextField
            label="Current Medications"
            name="currentMedications"
            value={formData.currentMedications}
            onChange={handleChange}
            fullWidth
            multiline
            minRows={2}
          />
          <TextField
            label="Emergency Contact"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            fullWidth
          />

          <Button type="submit" variant="contained" sx={{ mt: 1 }}>
            Save Profile
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
