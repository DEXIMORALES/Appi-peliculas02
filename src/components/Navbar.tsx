import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png'; // Ajusta según tu estructura

interface NavbarProps {
  userRole: "owner" | "vet"; // o los roles que uses
}

const Navbar: React.FC<NavbarProps> = ({ userRole }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes limpiar auth, tokens, etc.
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{ width: 40, height: "auto", mr: 2 }}
          />
          <Typography variant="h6" noWrap>
            Veterinaria | Rol: {userRole}
          </Typography>
        </Box>
        <Button color="inherit" onClick={handleLogout}>
          Cerrar sesión
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
