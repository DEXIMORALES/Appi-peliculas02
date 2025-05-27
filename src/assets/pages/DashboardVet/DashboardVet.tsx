// src/assets/pages/DashboardVet.tsx
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
  Grid,
} from "@mui/material";
import Navbar from "../../../components/Navbar";
import { useNavigate } from "react-router-dom";
import Logo from "../register/Logo.png";

const DashboardVet: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar userRole="vet" />

      <Container sx={{ mt: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{
              width: { xs: 100, sm: 120, md: 150 },
              height: "auto",
            }}
          />
        </Box>

        <Typography variant="h4" align="center" gutterBottom>
          Panel del Veterinario
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Historial Médico</Typography>
                <Button
                  onClick={() => navigate("/pet-history")}
                  variant="outlined"
                  sx={{ mt: 2 }}
                >
                  Ver historial de mascotas
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Registrar Atención</Typography>
                <Button
                  onClick={() => navigate("/register-treatment")}
                  variant="outlined"
                  sx={{ mt: 2 }}
                >
                  Nueva atención médica
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DashboardVet;
