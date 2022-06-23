import express from "express"
import Comentario from "../routes/comentarios.js"
import cors from "cors"
import { dbConnection } from "../database/config.js"
import pelicula from "../routes/pelicula.js"
import actor from "../routes/actor.js"
import Favorito from "../routes/favoritos.js"
import Persona from "../routes/persona.js"
import fileUpload from "express-fileUpload"

class Server {
    constructor() {
        this.app = express()
        this.middlewares()
        this.port=process.env.PORT
        this.conectarBd()
        this.routes()
        //this.escuchar()
    }

    routes(){
        this.app.use("/api/pelicula",pelicula)
        this.app.use("/api/comentarios", Comentario)
        this.app.use("/api/actor", actor)
        this.app.use("/api/favorito", Favorito)
        this.app.use("/api/persona", Persona)
    } 

    middlewares() {
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(fileUpload({
            useTempFiles:true,
            tempFileDir:'/tmp/',
            createParentPath:true
        }));
    }

    async conectarBd(){
        await dbConnection()
    }

    escuchar() {
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        })
    }
}
//export default Server//exportar 1 sola cosa
export {Server}

