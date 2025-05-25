import { Typography, Stack, TextField, Button, Box, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import type { SxProps, Theme } from "@mui/material";

import Logo from "../../../assets/Logo.png";
import { useState, useEffect } from "react";
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

export const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastname: "",
    document: "",
    email: "dexiblue.desing@gmail.com",
    confirmemail: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

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
  useEffect(() => {
    const userJson = localStorage.getItem("user");
    if (userJson !== null) {
      navigate("/Dashboard");
    }
  }, []);

  return (
    <Stack
      bgcolor="#5dd2f0"
      gap={2}
      p={5}
      borderRadius={"16px"}
      component="form"
      onSubmit={handleSubmit}
    >
      <Link component={RouterLink} to="/login">
        Back
      </Link>
      <Box
        component="img"
        src={Logo}
        alt="Logo"
        style={{ width: "100px", height: "auto" }}
      />

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
  );
};

export default Register;
