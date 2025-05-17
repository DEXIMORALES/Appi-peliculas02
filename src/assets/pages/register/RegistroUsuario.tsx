// src/pages/Register.tsx
import React, { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import type { Theme, SxProps } from "@mui/material";
import axios from "axios";
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
  nombre: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http:http://localhost:5173/api/register", formData);
      alert("Usuario registrado correctamente");
    } catch (error) {
      alert("Error al registrar usuario");
      console.error(error);
    }
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
      maxHeight="50%"
      gap={2}
      p={5}
      borderRadius={"16px"}
      component="form"
      onSubmit={handleSubmit}
    >
      <Box component="img" src={Logo} alt="Logo" /> 
      <Typography
        component="h3"
        variant="h5"
        color="#fff"
        fontWeight={700}
        textAlign={"center"}
        gutterBottom
      >
        Registro de Usuario
      </Typography>
      <Stack spacing={2}>
        <TextField
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          fullWidth
          sx={stylesInputs}
        />
        <TextField
          label="Correo electrónico"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          sx={stylesInputs}
        />
        <TextField
          label="Contraseña"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          fullWidth
          sx={stylesInputs}
        />
        <Button type="submit" variant="contained" color="primary">
          Registrarse
        </Button>
      </Stack>
    </Stack>
    </Stack>
  );
};

export default Register;
