import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const PetForm = () => {
  const [form, setForm] = useState({
    nombre: '',
    especie: '',
    raza: '',
    edad: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.especie || !form.raza || !form.edad) {
      alert('Por favor completa todos los campos');
      return;
    }

    console.log('Mascota registrada:', form);
    alert('Mascota registrada exitosamente');
    navigate('/dashboard-owner');
  };

  return (
    <>
      <Navbar userRole="owner" />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Registrar Mascota</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
          <Button type="submit" variant="contained">Registrar Mascota</Button>
        </Box>
      </Container>
    </>
  );
};

export default PetForm;

