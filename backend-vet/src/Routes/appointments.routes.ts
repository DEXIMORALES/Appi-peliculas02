import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Rutas de citas funcionando' });
});


router.post('/', (req, res) => {
  const newAppointment = req.body;
  console.log('Nueva cita:', newAppointment);
  res.status(201).json({ message: 'Cita registrada correctamente', appointment: newAppointment });
});

export default router;
