import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
  Alert,
  CircularProgress
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import axios from 'axios';

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

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const isFechaValida = (fecha: string) => {
    const hoy = new Date();
    const fechaIngresada = new Date(fecha);
    return fechaIngresada >= hoy;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { mascotaId, fecha, hora, motivo } = form;
    if (!mascotaId || !fecha || !hora || !motivo) {
      setError('Por favor completa todos los campos');
      return;
    }

    if (!isFechaValida(fecha)) {
      setError('La fecha no puede estar en el pasado');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await axios.post('http://localhost:3000/api/appointments', {
        mascotaId,
        fecha,
        hora,
        motivo
      });

      alert('Cita registrada exitosamente');
      navigate('/dashboard-owner');
    } catch (err: any) {
      console.error(err);
      setError(err?.response?.data?.message || 'Error al registrar la cita');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar userRole="owner" />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Apartar Cita</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {error && <Alert severity="error">{error}</Alert>}

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
            {loading ? <CircularProgress size={24} /> : 'Apartar Cita'}
          </Button>
        </Box>
      </Container>
    </>
  );
}
