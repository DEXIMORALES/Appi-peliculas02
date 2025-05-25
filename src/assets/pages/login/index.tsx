import type { Theme } from "@emotion/react";
import { Typography, Stack, TextField, Button, Link } from "@mui/material";
import { Box, type SxProps } from "@mui/system";
import Logo from "../../../assets/Logo.png";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

/**Typography
 * pH1 H1 H2 H3 H4 H5 H6
 */
/** Stack
 * div que tiene por defecto display flex
 * direction: row | column
 * gap: espacio entre los elementos
 * bgcolor: color de fondo
 * height: altura del stack
 * width: ancho del stack
 * spacing: espacio entre los elementos
 * padding: espacio dentro del stack
 * margin: espacio fuera del stack
 * alignItems: alinear los elementos dentro del stack
 * justifyContent: justificar los elementos dentro del stack
 * flexDirection: dirección del stack
 * flexWrap: envolver los elementos dentro del stack
 * flexGrow: crecer el stack
 * #0D253F
 * como componentes
 */
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

export const Login = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "dexiblue.desing@gmail.com",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //const formData = new FormData(e.currentTarget);
    navigate("/Dashboard");
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
      navigate("/Dashboard");
    }
  }, []);
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
        <TextField
          label="Nombre"
          variant="outlined"
          type="nombre"
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
          type="Password"
          sx={stylesInputs}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Link component={RouterLink} to="/register" color="#fff">
          Registro
        </Link>
        <Button variant="contained" type="submit">
          Sing In
        </Button>
      </Stack>
    </Stack>
  );
};
