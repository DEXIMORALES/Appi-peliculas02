import { Container, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function DashboardVet() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar userRole="vet" />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Panel del Veterinario</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Citas Agendadas</Typography>
                <Button onClick={() => navigate('/appointments')} variant="outlined" sx={{ mt: 2 }}>
                  Ver todas las citas
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Historial de Mascotas</Typography>
                <Button onClick={() => navigate('/pet-history')} variant="outlined" sx={{ mt: 2 }}>
                  Ver historial
                </Button>
                <Button onClick={() => navigate('/pet-history')}>Ver historial de mascotas</Button>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
