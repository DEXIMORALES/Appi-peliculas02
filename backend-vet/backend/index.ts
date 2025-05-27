import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Definir la interfaz para una cita
interface Appointment {
  id: number;
  mascotaId: number;
  fecha: string;
  hora: string;
  motivo: string;
}

// Simulación de almacenamiento de citas
const appointments: Appointment[] = [];

// Endpoint para registrar una cita
app.post('/api/appointments', (req, res) => {
  const { mascotaId, fecha, hora, motivo } = req.body;

  if (!mascotaId || !fecha || !hora || !motivo) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  // Aquí normalmente guardarías en una base de datos
  const nuevaCita = {
    id: appointments.length + 1,
    mascotaId,
    fecha,
    hora,
    motivo
  };

  appointments.push(nuevaCita);

  console.log('Cita registrada:', nuevaCita);

  res.status(201).json({ message: 'Cita registrada exitosamente', cita: nuevaCita });
});

// Servidor en marcha
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
