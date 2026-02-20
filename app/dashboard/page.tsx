"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import PatientDashboard from "../components/patient-dashboard/PatientDashboard";
import ProviderDashboard from "../components/provider-dashboard/ProviderDashboard";

export default function DashboardPage() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Container maxWidth={false} sx={{ py: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3, width: "100%" }}>
        <Box component="nav" sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
            <Button component={NextLink} href="/dashboard/home" sx={{ color: "inherit", fontWeight: 500, textTransform: "none" }}>Home</Button>
            <Button component={NextLink} href="/dashboard/health-topics" sx={{ color: "inherit", fontWeight: 500, textTransform: "none" }}>Health Topics</Button>
            <Button component={NextLink} href="/dashboard/resources" sx={{ color: "inherit", fontWeight: 500, textTransform: "none" }}>Resources</Button>
            <Button component={NextLink} href="/dashboard/support" sx={{ color: "inherit", fontWeight: 500, textTransform: "none" }}>About Us</Button>
            <Button component={NextLink} href="/dashboard/contact" sx={{ color: "inherit", fontWeight: 500, textTransform: "none" }}>Contact</Button>
          </Box>
        </Box>

        <Box>
          <IconButton onClick={handleOpen} aria-controls={anchorEl ? "profile-menu" : undefined} aria-haspopup="true">
            <Avatar>U</Avatar>
          </IconButton>
          <Menu id="profile-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
            <MenuItem component={NextLink} href="/dashboard/profile" onClick={handleClose}>Profile</MenuItem>
            <MenuItem component={NextLink} href="/logout" onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>

      <Paper sx={{ p: 4 }}>
        <PatientDashboard />
        {/* <ProviderDashboard /> */}
      </Paper>
    </Container>
  );
}
