import express from "express";

// Imports
import { 
    agregarPaciente, 
    obtenerPacientePorId, 
    obtenerPacientes 
} from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

// Área pública

// Área privada
router.route('/')
    .post(checkAuth, agregarPaciente)
    .get(checkAuth, obtenerPacientes);
router.get('/paciente/:idPaciente', checkAuth, obtenerPacientePorId);

export default router;