import { Typography, Stack, TextField, Button, Link } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../../assets/images/Logo.png";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";

const stylesInputs = {
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

export const Login = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "dexiblue.desing@gmail.com",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      const user = res.data;
      localStorage.setItem("user", JSON.stringify(user));

      // Redirigir según tipo de usuario
      if (user.role === "owner") {
        navigate("/DashboardOwner");
      } else if (user.role === "vet") {
        navigate("/DashboardVet");
      } else {
        navigate("/dashboard"); // fallback
      }
    } catch {
      setError("Credenciales incorrectas o error de servidor");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    if (userJson !== null) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <Stack
      bgcolor="#0f55b8"
      height="100vh"
      direction="row"
      component="main"
      gap={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        bgcolor="#5dd2f0"
        maxHeight="70%"
        gap={2}
        p={5}
        borderRadius={"14px"}
        component="form"
        onSubmit={handleSubmit}
      >
        <Box
          component="img"
          src={Logo}
          alt="Logo"
          style={{ width: "100px", height: "auto" }}
        />
        <Typography
          component="h3"
          variant="h1"
          color="#fff"
          fontWeight={700}
          textAlign={"center"}
        >
          Veterinaria
        </Typography>

        {error && (
          <Typography color="error" textAlign="center">
            {error}
          </Typography>
        )}

        <TextField
          label="Nombre"
          variant="outlined"
          type="text"
          sx={stylesInputs}
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Email"
          variant="outlined"
          type="email"
          sx={stylesInputs}
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          sx={stylesInputs}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Link component={RouterLink} to="/register" color="#fff">
          Registro
        </Link>

        <Button variant="contained" type="submit">
          Sign In
        </Button>
      </Stack>
    </Stack>
  );
};
