// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Base de datos temporal (en memoria)
let pets = [];

// ✅ Endpoint: Registrar mascota
app.post('/api/pets', (req, res) => {
  console.log('Mascota recibida:', req.body);

  const { nombre, especie, raza, edad } = req.body;

  if (!nombre || !especie || !raza || !edad) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  const newPet = {
    id: pets.length + 1,
    nombre,
    especie,
    raza,
    edad,
  };

  pets.push(newPet);

  return res.status(201).json({ message: 'Mascota registrada', pet: newPet });
});

// 🔍 (Opcional) Ver mascotas registradas
app.get('/api/pets', (req, res) => {
  res.json(pets);
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:3000`);
});
