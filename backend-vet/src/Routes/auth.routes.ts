import { Router } from "express";
import type { Request, Response } from "express";

import User from "../models/User";

const router = Router();

// Registro de usuario
router.post("/register", async (req, res) => {
  const { nombre, email, password } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).json({ message: "Todos los campos son requeridos" });
  }

  // Verificar si el usuario ya existe
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({ message: "El email ya está registrado" });
  }

  // Crear y guardar el nuevo usuario
  const newUser = new User({ nombre, email, password });
  await newUser.save();

  res
    .status(201)
    .json({ message: "Usuario registrado con éxito", user: newUser });
});

// Login de usuario
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email y password requeridos" });
  }

  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }

  res.json({ message: "Login exitoso", user });
});

export default router;

// (Removed duplicate route and export)
