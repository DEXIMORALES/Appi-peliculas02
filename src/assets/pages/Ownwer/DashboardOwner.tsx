import { Container, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import Navbar from "./DashboardOwner";

import { useNavigate } from 'react-router-dom';
import Logo from '../pages/register/Logo.png';
export default function DashboardOwner() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar userRole="owner" />
      <Container sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
  <Box
    component="img"
    src={Logo}
    alt="Logo"
    sx={{
      width: { xs: 100, sm: 120, md: 150 }, // tamaño adaptable
      height: 'auto'
    }}
  />
</Box>

<Typography variant="h4" align="center" gutterBottom>
  Panel del Dueño
</Typography>

        <Typography variant="h4" gutterBottom>Panel del Dueño</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Mis Mascotas</Typography>
                <Button onClick={() => navigate('/pet-form')} variant="outlined" sx={{ mt: 2 }}>
                  Registrar nueva mascota
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Mis Citas</Typography>
                <Button onClick={() => navigate('/book-appointment')} variant="outlined" sx={{ mt: 2 }}>
                  Apartar nueva cita
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
