"use client";

import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

export default function MuiProvider({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#000000",
        contrastText: "#ffffff",
      },
      background: {
        default: "#ffffff",
        paper: "#ffffff",
      },
      text: {
        primary: "#000000",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 6,
          },
          contained: {
            backgroundColor: "#000000",
            color: "#ffffff",
            boxShadow: "none",
            '&:hover': {
              backgroundColor: "#222222",
            },
          },
          outlined: {
            color: "#000000",
            borderColor: "#000000",
            '&:hover': {
              backgroundColor: "#f5f5f5",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
