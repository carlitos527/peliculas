import mongoose from "mongoose";

const ComentarioSchema= new mongoose.Schema({
    idPelicula:{
        type: mongoose.Schema.ObjectId,
        ref:"Pelicula",
        required: true
    },
    idUsuario:{
        type: mongoose.Schema.ObjectId,
        ref:"Persona",
        required: true
    },
    comment:{
        type: String,
        minlength:3,
        required: true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export default mongoose.model('Comentario',ComentarioSchema)