import express from "express";

// Imports
import { 
    agregarPaciente, 
    obtenerPacientePorId, 
    actualizarPacientePorId,
    eliminarPacientePorId,
    obtenerPacientes
} from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

// Área pública

// Área privada
router.route('/')
    .post(checkAuth, agregarPaciente)
    .get(checkAuth, obtenerPacientes);
router.route('/:idPaciente')
    .get(checkAuth, obtenerPacientePorId)
    .put(checkAuth, actualizarPacientePorId)
    .delete(checkAuth, eliminarPacientePorId)

export default router;