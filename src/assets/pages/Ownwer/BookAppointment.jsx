import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const isFechaInvalida = (fecha) => {
    const hoy = new Date();
    const inputDate = new Date(fecha);
    hoy.setHours(0, 0, 0, 0); // Eliminar hora para comparación justa
    return inputDate < hoy;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { mascotaId, fecha, hora, motivo } = form;

    if (!mascotaId || !fecha || !hora || !motivo) {
      setError('Por favor completa todos los campos.');
      return;
    }

    if (isFechaInvalida(fecha)) {
      setError('La fecha no puede estar en el pasado.');
      return;
    }

    setLoading(true);
    try {
      // Reemplaza esta URL con tu endpoint real
      const response = await axios.post('https://tu-api.com/citas', form);
      alert('Cita registrada exitosamente');
      navigate('/dashboard-owner');
    } catch (err) {
      console.error(err);
      setError('Ocurrió un error al registrar la cita. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar userRole="owner" />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Apartar Cita</Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

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

          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? 'Enviando...' : 'Apartar Cita'}
          </Button>
        </Box>
      </Container>
    </>
  );
}
