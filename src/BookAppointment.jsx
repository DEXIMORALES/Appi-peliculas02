import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  MenuItem
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Simulación de mascotas disponibles
const mascotasDummy = [
  { id: 1, nombre: 'Firulais' },
  { id: 2, nombre: 'Michi' }
];

export default function BookAppointment() {
  const [form, setForm] = useState({
    mascotaId: '',
    fecha: '',
    hora: '',
    motivo: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.mascotaId || !form.fecha || !form.hora || !form.motivo) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Aquí iría el llamado al backend
    console.log('Cita registrada:', form);
    alert('Cita registrada exitosamente');
    navigate('/dashboard-owner');
  };

  return (
    <>
      <Navbar userRole="owner" />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Apartar Cita</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Mascota"
            name="mascotaId"
            select
            required
            fullWidth
            value={form.mascotaId}
            onChange={handleChange}
          >
            {mascotasDummy.map((m) => (
              <MenuItem key={m.id} value={m.id}>{m.nombre}</MenuItem>
            ))}
          </TextField>

          <TextField
            label="Fecha"
            name="fecha"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={form.fecha}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Hora"
            name="hora"
            type="time"
            InputLabelProps={{ shrink: true }}
            value={form.hora}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Motivo de la consulta"
            name="motivo"
            value={form.motivo}
            onChange={handleChange}
            required
            multiline
            rows={3}
            fullWidth
          />

          <Button type="submit" variant="contained">Apartar Cita</Button>
        </Box>
      </Container>
    </>
  );
}
