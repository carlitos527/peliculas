import {Router} from "express"
const router= new Router()
import {ActorPost,actorGet,actorGetId,actorGetName,actorDelete} from '../controllers/actor.js'
import {check} from "express-validator"
import {validarCampos} from "../middleware/middleware.js"

router.post('/agregar',[
    
    check('name','El nombre es obligatorio!!!').isLength({ max:25}),
    check('image','La imagen es obligatoria!!').not().isEmpty(),
    check('biography','el nombre es oblihatorio!!').isLength({ min:6}),
    validarCampos
    
],ActorPost)

router.get('/',actorGet)

router.get('/:id',actorGetId)

router.get('/buscar/nombre',actorGetName)

router.delete('/:id',actorDelete)

export default router