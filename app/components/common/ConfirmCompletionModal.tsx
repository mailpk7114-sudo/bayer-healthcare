"use client";

import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

interface Props {
  open: boolean;
  itemName?: string;
  onClose: () => void;
  onConfirm: (notes?: string) => void;
}

export default function ConfirmCompletionModal({ open, itemName, onClose, onConfirm }: Props) {
  const [notes, setNotes] = useState("");

  const handleClose = () => {
    setNotes("");
    onClose();
  };

  const handleConfirm = () => {
    onConfirm(notes.trim() || undefined);
    setNotes("");
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Mark as Completed</DialogTitle>
      <DialogContent>
        <Typography sx={{ mb: 2 }}>
          Are you sure you want to mark &quot;{itemName ?? "this item"}&quot; as completed?
        </Typography>

        <TextField
          label="Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          fullWidth
          multiline
          minRows={2}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="inherit">
          Cancel
        </Button>
        <Button onClick={handleConfirm} variant="contained">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
