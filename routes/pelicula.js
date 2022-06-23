import {Router} from "express"
import { peliculaGet,peliculaGetid, peliculaGetTitulo, peliculaPost, peliculaDelete, cargarArchivo } from "../controllers/pelicula.js"
const router= new Router()       //conc¿exion de rutas

router.get('/', peliculaGet)

router.get('/buscar/id', peliculaGetid) 

router.get('/buscar/titulo', peliculaGetTitulo ) 
    
router.post('/agregar', peliculaPost)

router.post('/upload/:id',[
    
],cargarArchivo)
  
router.delete('/iliminar',peliculaDelete) 
    
  

export default router
