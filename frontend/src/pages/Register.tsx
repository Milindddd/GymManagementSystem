import React from "react";
import { Container, Box, Typography } from "@mui/material";
import AuthForm from "../components/AuthForm";

const Register: React.FC = () => {
  const fields = [
    { name: "name", label: "Name" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
    {
      name: "role",
      label: "Role",
      select: true,
      options: [
        { value: "member", label: "Member" },
        { value: "admin", label: "Admin" },
      ],
    },
  ];

  const handleRegister = (data: any) => {
    console.log(data);
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <AuthForm
          fields={fields}
          buttonLabel="Register"
          onSubmit={handleRegister}
        />
      </Box>
    </Container>
  );
};

export default Register;
