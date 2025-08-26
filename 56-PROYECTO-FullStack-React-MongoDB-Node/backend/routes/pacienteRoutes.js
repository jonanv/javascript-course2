import express from "express";

// Imports
import { 
    agregarPaciente, 
    obtenerPacientes 
} from "../controllers/pacienteController.js";

const router = express.Router();

// Área pública
router.route('/')
    .post(agregarPaciente)
    .get(obtenerPacientes);

// Área privada

export default router;