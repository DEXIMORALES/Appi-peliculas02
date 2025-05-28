import express from 'express';

const router = express.Router();


router.get('/', (_req, res) => {
    res.json({ message: 'Rutas de mascota funcionando' });
});

router.post('/', (req, res) => {
  const newPet = req.body;
  console.log('Nueva mascota:', newPet);
  res.status(201).json({ message: 'Mascota registrada correctamente', pet: newPet });
});

export default router;
