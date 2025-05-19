// src/pages/Register.tsx
import React, { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import type { Theme, SxProps } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../../assets/Logo.png";
// import { getTheme } from "../../theme"; // Importa el tema de tu aplicación

const stylesInputs: SxProps<Theme> = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
    color: "#fff",
  },
  "& .MuiInputLabel-root": {
    color: "#fff",
    "&.Mui-focused": {
      color: "#fff",
    },
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
};

interface FormData {
  name: string;
  lastname: string;
  document: string;
  email: string;
  password: string;
  confirmPassword: string;
  confirmemail?: string;
}

const RegistroUsuario: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastname: "",
    document: "",
    email: "dexiblue.desing@gmail.com",
    confirmemail: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const newData = {
      ...formData,
      [name]: value,
    };
    if (
      name === "confirmPassword" &&
      formData.password !== formData.confirmPassword
    ) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
    setFormData(newData);
  };

  return (
    <Stack
      bgcolor="#3a4348"
      height="100vh"
      direction="row"
      component="main"
      gap={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        bgcolor="#0D253F"
        gap={2}
        p={5}
        borderRadius={"16px"}
        component="form"
        onSubmit={handleSubmit}
      >
        <Box component="img" src={Logo} alt="Logo" minWidth={200} mb={2} />

        <Stack direction="row" gap={2}>
          <Typography
            component="h1"
            variant="h3"
            color="#fff"
            fontWeight={700}
            textAlign={"center"}
            gutterBottom
          >
            Registro de Usuario
          </Typography>
        </Stack>
        <Stack spacing={2} mt={2}>
          {error && (
            <Typography color="error" textAlign="center">
              {error}
            </Typography>
          )}
          <Stack direction="row" gap={2}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              sx={stylesInputs}
              autoComplete="off"
            />

            <TextField
              label="LastName"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              fullWidth
              sx={stylesInputs}
              autoComplete="off"
            />
          </Stack>
          <Stack direction="row" gap={2}>
            <TextField
              label="Document"
              name="document"
              value={formData.document}
              onChange={handleChange}
              required
              fullWidth
              sx={stylesInputs}
              autoComplete="off"
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              sx={stylesInputs}
              autoComplete="off"
            />
          </Stack>
          <Stack direction="row" gap={2}>
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
              sx={stylesInputs}
              autoComplete="off"
            />
            <TextField
              label="ConfirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              fullWidth
              sx={stylesInputs}
              autoComplete="off"
            />
          </Stack>
          {error.length > 0 && <Typography color="error">{error}</Typography>}
          <Button variant="contained" type="submit">
            Register
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RegistroUsuario;