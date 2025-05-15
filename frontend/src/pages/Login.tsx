import React from "react";
import { Container, Box, Typography } from "@mui/material";
import AuthForm from "../components/AuthForm";

const Login: React.FC = () => {
  const fields = [
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];

  const handleLogin = (data: any) => {
    console.log(data);
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <AuthForm fields={fields} buttonLabel="Login" onSubmit={handleLogin} />
      </Box>
    </Container>
  );
};

export default Login;
