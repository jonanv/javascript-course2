import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaTestimonios, 
    paginaDetalleViaje, 
    paginaViajes 
} from '../controllers/paginasController.js';

const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);
router.get('/testimonios', paginaTestimonios);

export default router;