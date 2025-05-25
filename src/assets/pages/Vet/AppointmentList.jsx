import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@mui/material';
import Navbar from '@/components/Navbar';

// Datos simulados
const citasDummy = [
  {
    id: 1,
    mascota: 'Firulais',
    dueño: 'Juan Pérez',
    fecha: '2025-05-22',
    hora: '10:00',
    motivo: 'Vacunación'
  },
  {
    id: 2,
    mascota: 'Michi',
    dueño: 'Laura Gómez',
    fecha: '2025-05-23',
    hora: '14:30',
    motivo: 'Revisión general'
  }
];

export default function AppointmentList() {
  const handleAtendida = (id) => {
    alert(`Marcaste como atendida la cita ID: ${id}`);
    // Aquí iría la lógica para actualizar estado en backend
  };

  return (
    <>
      <Navbar userRole="vet" />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Citas Agendadas</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Mascota</TableCell>
                <TableCell>Dueño</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Hora</TableCell>
                <TableCell>Motivo</TableCell>
                <TableCell>Acción</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {citasDummy.map((cita) => (
                <TableRow key={cita.id}>
                  <TableCell>{cita.mascota}</TableCell>
                  <TableCell>{cita.dueño}</TableCell>
                  <TableCell>{cita.fecha}</TableCell>
                  <TableCell>{cita.hora}</TableCell>
                  <TableCell>{cita.motivo}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleAtendida(cita.id)}
                    >
                      Atendida
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
           </Table>
        </TableContainer>
      </Container>
    </>
  );
}