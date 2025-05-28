import express from 'express';
import cors from 'cors';
import authRoutes from "./routes/auth.routes";
import petsRoutes from './Routes/pets.routes.ts';
import appointmentsRoutes from './Routes/appointments.routes.ts';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('🚀 Backend funcionando');
});

// Conectar rutas
app.use("/api/auth", authRoutes); 
app.use('/api/pets', petsRoutes);
app.use('/api/appointments', appointmentsRoutes);


app.listen(PORT, () => {
  console.log(`✅ Servidor en http://localhost:${PORT}`);
});
