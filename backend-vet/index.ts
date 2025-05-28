import express, { Request, Response } from "express";
import cors from "cors";
import './routes/pets'
import { Router } from "express";


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

const router = Router();

router.post('/', (req: Request, res: Response) => {
  const { mascotaId, fecha, hora, motivo } = req.body;
  const newAppointment: Appointment = {
    id: appointments.length + 1,
    mascotaId,
    fecha,
    hora,
    motivo
  };
  appointments.push(newAppointment);
  res.status(201).json({ message: 'Cita registrada', cita: newAppointment });
});

app.use('/api/appointments', router);

// Servidor en marcha
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${3000}`);
});
