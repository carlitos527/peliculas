import {Router} from "express"
import { personaGet, personaGetLogin, personaPost, personaDelete } from "../controllers/persona.js"
import validarJWT from "../middleware/validar-jwt.js"
const router= new Router()       //conc¿exion de rutas

router.get('/', personaGet)



router.get('/login', [
    validarJWT
],personaGetLogin ) 

//router.put ('/modificar',personaPut)
    
router.post('/agregar', personaPost)

    
    
router.delete('/eliminar',personaDelete) 
    
  

export default router
