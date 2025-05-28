import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  userRole: "owner" | "vet";
}

export default function Navbar({ userRole }: Props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Clínica Veterinaria
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          {userRole === "owner" && (
            <>
              <Button color="inherit" component={Link} to="/dashboard-vet">
                Inicio
              </Button>
              <Button color="inherit" component={Link} to="/pet-form">
                Registrar Mascota
              </Button>
              <Button color="inherit" component={Link} to="/book-appointment">
                Agendar Cita
              </Button>
            </>
          )}

          {userRole === "vet" && (
            <>
              <Button color="inherit" component={Link} to="/dashboard-vet">
                Inicio
              </Button>
              <Button color="inherit" component={Link} to="/pet-history">
                Historial
              </Button>
            </>
          )}

          <Button color="inherit" component={Link} to="/login">
            Salir
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
