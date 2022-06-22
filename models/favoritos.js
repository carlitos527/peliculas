import mongoose from "mongoose";

const FavoritoSchema = new mongoose.Schema({
    idpelicula: {
        type: mongoose.Schema.ObjectId,
        ref:"Pelicula",
        required: true

    },
    idusuario: { type: mongoose.Schema.ObjectId,
        ref:"Usuario",
        require: true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

export default mongoose.model('Favorito', FavoritoSchema)