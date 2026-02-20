// components/PatientDashboard.tsx
import { useState, useEffect } from "react";
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
import ConfirmCompletionModal from "../common/ConfirmCompletionModal";

interface Vaccine {
  id: number;
  name: string;
  provider?: string;
  date: string;
  status: "scheduled" | "completed" | "overdue";
  notes?: string;
}

export default function PatientDashboard() {
  const [vaccines, setVaccines] = useState<Vaccine[]>([
    { id: 1, name: "COVID-19 Booster", provider: "Bayer Clinic", date: "2026-03-01", status: "scheduled", notes: "Bring ID" },
    { id: 2, name: "Flu Shot", provider: "Community Health", date: "2025-12-15", status: "completed", notes: "Completed at local clinic" },
    { id: 3, name: "Hepatitis B", provider: "Bayer Clinic", date: "2026-01-20", status: "overdue", notes: "Reschedule needed" },
  ]);

  useEffect(() => {
    // placeholder for future API fetch
  }, []);

  const markCompleted = (id: number) => {
    setVaccines((prev) => prev.map((v) => (v.id === id ? { ...v, status: "completed" } : v)));
  };

  const [openConfirmId, setOpenConfirmId] = useState<number | null>(null);
  const [confirmItemName, setConfirmItemName] = useState<string | undefined>(undefined);

  const statusColor = (status: Vaccine["status"]) => {
    switch (status) {
      case "completed":
        return "success";
      case "overdue":
        return "error";
      default:
        return "warning";
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Patient Vaccine Dashboard
      </Typography>

      <TableContainer component={Paper} elevation={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Vaccine</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Provider</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Notes</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vaccines.map((v) => (
              <TableRow key={v.id}>
                <TableCell>{v.id}</TableCell>
                <TableCell>{v.name}</TableCell>
                <TableCell>{v.provider ?? "-"}</TableCell>
                <TableCell>{v.date}</TableCell>
                <TableCell>
                  <Chip label={v.status} color={statusColor(v.status)} size="small" />
                </TableCell>
                <TableCell>{v.notes ?? "-"}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    {v.status !== "completed" && (
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => {
                          setConfirmItemName(v.name);
                          setOpenConfirmId(v.id);
                        }}
                      >
                        Mark Completed
                      </Button>
                    )}
                    {/* <Button size="small" variant="outlined">View</Button> */}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ConfirmCompletionModal
        open={openConfirmId !== null}
        itemName={confirmItemName}
        onClose={() => setOpenConfirmId(null)}
        onConfirm={() => {
          if (openConfirmId !== null) markCompleted(openConfirmId);
          setOpenConfirmId(null);
        }}
      />
    </Container>
  );
}