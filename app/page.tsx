import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Home() {
  return (
    <Container maxWidth={false} sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Bayer Healthcare.
      </Typography>
      <Typography variant="h5" component="p" sx={{ fontWeight: 600, mb: 2 }}>
        Your Health, Our Top Priority
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Explore the latest health information and resources from Bayer Healthcare.
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" }, gap: 3 }}>
        <Card>
          <CardContent>
            <Typography variant="h6">Covid 19 Updates</Typography>
            <Typography variant="body2">Get the latest news and advisories on Covid-19.</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6">Heart Health</Typography>
            <Typography variant="body2">Learn how to maintain a healthy heart.</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6">Mental Wellness</Typography>
            <Typography variant="body2">Find tips and resources for mental well-being.</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
