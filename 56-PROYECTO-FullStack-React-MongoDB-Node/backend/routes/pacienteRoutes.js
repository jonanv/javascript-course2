import express from "express";

// Imports
import { 
    agregarPaciente, 
    obtenerPacientes 
} from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

// Área pública

// Área privada
router.route('/')
    .post(checkAuth, agregarPaciente)
    .get(checkAuth, obtenerPacientes);

export default router;