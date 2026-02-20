"use client";

import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#f5f5f5", color: "#000" }} elevation={2}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
            fontSize: "1.5rem",
            "&:hover": { opacity: 0.8 },
          }}
        >
          Bayer Health
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "flex-end",
            alignItems: "center",
            flex: 1,
            ml: 4,
          }}
        >
          <Button
            component={Link}
            href="/registration"
            sx={{
              color: "inherit",
              fontWeight: 500,
              fontSize: "1rem",
              px: 3,
              py: 1.5,
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.08)",
                borderRadius: "4px",
              },
            }}
          >
            Registration
          </Button>
          <Button
            component={Link}
            href="/login"
            sx={{
              color: "inherit",
              fontWeight: 500,
              fontSize: "1rem",
              px: 3,
              py: 1.5,
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.08)",
                borderRadius: "4px",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
