"use client";

import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface Provider {
  id: number;
  name: string;
  location?: string;
  contact?: string;
  vaccinesOffered: string[];
  nextAvailableDate?: string;
}

export default function ProviderDashboard() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [providers, _setProviders] = useState<Provider[]>([
    { id: 1, name: "Bayer Clinic", location: "123 Main St", contact: "info@bayerclinic.example", vaccinesOffered: ["COVID-19 Booster", "Flu Shot"], nextAvailableDate: "2026-03-01" },
    { id: 2, name: "Community Health", location: "45 Elm Ave", contact: "contact@community.example", vaccinesOffered: ["Flu Shot"], nextAvailableDate: "2025-12-20" },
    { id: 3, name: "Downtown Pharmacy", location: "9 Market Rd", contact: "pharmacy@downtown.example", vaccinesOffered: ["Hepatitis B", "Flu Shot"], nextAvailableDate: "2026-01-25" },
  ]);

  useEffect(() => {
    // fetch providers from API later
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Vaccination Providers
      </Typography>

      <TableContainer component={Paper} elevation={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Provider</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Location</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Contact</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Vaccines Offered</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Next Available</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {providers.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.id}</TableCell>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.location ?? "-"}</TableCell>
                <TableCell>{p.contact ?? "-"}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    {p.vaccinesOffered.map((v) => (
                      <Chip key={v} label={v} size="small" />
                    ))}
                  </Stack>
                </TableCell>
                <TableCell>{p.nextAvailableDate ?? "-"}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <Button size="small" variant="outlined">
                      Contact
                    </Button>
                    <Button size="small" variant="contained">View</Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
