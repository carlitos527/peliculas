import {Router} from "express"
const router= new Router()
import { favoritoGet, favoritoPost } from "../controllers/favoritos.js"

router.post('/agregar',favoritoPost)
router.get('/buscar',favoritoGet)

export default router