import mongoose from "mongoose";


const PeliculaSchema= new mongoose.Schema({
    titulo:{type:String, maxlength:12,required:true,},
    formato:{type:String, maxlength:25, required:true},
    genero:{type:String, maxlength:25,required:true},
    idioma:{type:String, required:true, default:0},
    director:{type:String, required:true},
    pais:{type:String, required:true, minlength:6},
    reparto:[
        {
            idactor:{
                type:mongoose.Schema.ObjectId,
                 ref:"Actor", required:true
                }      
        }
    ],
    createdAt: {type: Date, default:Date.now}
        
})

export default mongoose.model("Pelicula", PeliculaSchema) // se crea un modelo apartir deñ obketo de arriba. colocar llaves si no lo dejo por default