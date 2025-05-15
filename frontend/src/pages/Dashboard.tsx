import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <Typography component="h1" variant="h4">
          Welcome to the Dashboard!
        </Typography>
        <Typography variant="body1" mt={2}>
          (Role-based content will appear here)
        </Typography>
      </Box>
    </Container>
  );
};

export default Dashboard;
