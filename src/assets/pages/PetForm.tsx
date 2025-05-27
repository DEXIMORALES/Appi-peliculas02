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
import Navbar from '../../components/Navbar';
import axios from 'axios';

interface FormData {
  nombre: string;
  especie: string;
  raza: string;
  edad: string;
}

export default function PetForm() {
  const [form, setForm] = useState<FormData>({
    nombre: '',
    especie: '',
    raza: '',
    edad: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.nombre || !form.especie || !form.raza || !form.edad) {
      setError('Por favor completa todos los campos');
      return;
    }

    try {
      setLoading(true);
      await axios.post('http://localhost:3000/api/pets', form);
      alert('Mascota registrada exitosamente');
      navigate('/dashboard-owner');
    } catch (err: unknown) {
      let errorMessage = 'Error al registrar mascota';
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        errorMessage = err.response.data.message;
      }
      console.error(err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar userRole="owner" />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Registrar Mascota
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Navbar userRole="vet" />
        <Typography variant="body1" sx={{ mb: 2 }}>
          Completa el siguiente formulario para registrar una nueva mascota.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Especie"
            name="especie"
            value={form.especie}
            onChange={handleChange}
            required
            select
            fullWidth
          >
            <MenuItem value="Perro">Perro</MenuItem>
            <MenuItem value="Gato">Gato</MenuItem>
            <MenuItem value="Otro">Otro</MenuItem>
          </TextField>
          <TextField
            label="Raza"
            name="raza"
            value={form.raza}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Edad (años)"
            name="edad"
            type="number"
            value={form.edad}
            onChange={handleChange}
            required
            fullWidth
            inputProps={{ min: 0 }}
          />
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? "Registrando..." : "Registrar Mascota"}
          </Button>
        </Box>
      </Container>
    </>
  );
}

