import express from 'express';
import cors from 'cors';
import authRoutes from "./Routes/auth.routes.ts";
import petsRoutes from "./Routes/pets.routes.ts";
import appointmentsRoutes from "./Routes/appointments.routes.ts";
import { connectDB } from "../db.ts";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
connectDB();

const app = express();

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
