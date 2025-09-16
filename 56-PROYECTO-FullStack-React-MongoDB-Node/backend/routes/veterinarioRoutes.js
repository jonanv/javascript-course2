import express from "express";

// Imports
import { 
    perfil, 
    registrar, 
    confirmar, 
    autenticar, 
    olvidePassword, 
    comprobarToken,
    nuevoPassword,
    actualizarPerfil,
    actualizarPassword
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

// Área pública
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword);
// router.get('/olvide-password/:token', comprobarToken);
// router.post('/olvide-password/:token', nuevoPassword);
router.route('/olvide-password/:token')
    .get(comprobarToken)
    .post(nuevoPassword);

// Área privada
router.get('/perfil', checkAuth, perfil);
router.put('/perfil/:idVeterinario', checkAuth, actualizarPerfil);
router.put('/actualizar-password', checkAuth, actualizarPassword);

export default router;