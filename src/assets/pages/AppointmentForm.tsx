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
import axios from 'axios';
import Navbar from '../../components/Navbar';

const mascotasDummy = [
  { id: 1, nombre: 'Firulais' },
  { id: 2, nombre: 'Michi' }
];

export default function AppointmentForm() {
  const [form, setForm] = useState({
    mascotaId: '',
    fecha: '',
    hora: '',
    motivo: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.mascotaId || !form.fecha || !form.hora || !form.motivo) {
      setError('Por favor completa todos los campos');
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    if (form.fecha < today) {
      setError('La fecha no puede estar en el pasado');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await axios.post('http://localhost:3000/api/appointments', form);
      alert('Cita registrada exitosamente');
      navigate('/dashboard-owner');
    } catch (err: unknown) {
      console.error(err);
      // Define a type for the error
      type AxiosErrorResponse = {
        response?: {
          data?: {
            message?: string;
          };
        };
      };
      const errorObj = err as AxiosErrorResponse;
      if (
        typeof err === 'object' &&
        err !== null &&
        errorObj.response &&
        errorObj.response.data &&
        typeof errorObj.response.data === 'object' &&
        errorObj.response.data.message
      ) {
        setError(errorObj.response.data.message || 'Error al registrar la cita');
      } else {
        setError('Error al registrar la cita');
      }
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
          {error && <Typography color="error">{error}</Typography>}

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
            {loading ? 'Guardando...' : 'Apartar Cita'}
          </Button>
        </Box>
      </Container>
    </>
  );
}
