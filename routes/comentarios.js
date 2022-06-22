import {Router} from "express"
const router= new Router()
import {comentarios} from "../controllers/comentarios.js"

router.post('/agregar', comentarios.comentarioPost)

router.get('/buscar',comentarios.comentarioGet)


export default router