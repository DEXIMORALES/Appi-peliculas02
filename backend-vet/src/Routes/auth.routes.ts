import { Router } from "express";

const router = Router();

// Ruta de login (simulación simple)
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Validación básica (puedes cambiarlo por DB real)
 if (!email || !password) {
    return res.status(400).json({ message: "Email y password son requeridos" });
  }

  // Aquí deberías validar las credenciales, esto es solo un ejemplo
  if (email !== "admin@example.com" || password !== "password123") {
    return res.status(400).json({ message: "Credenciales incorrectas" });
  }

  res.json({ message: "Login exitoso" });
});

export default router;
