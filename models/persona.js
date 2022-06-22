import mongoose from "mongoose";


const PersonaSchema= new mongoose.Schema({
    
    nombre:{type:String, maxlength:25, required:true},
    apellido:{type:String, maxlength:25,required:true},
    edad:{type:Number,required:true, unique:0},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, minlength:6},
    createdAt:{type:Date, default:Date.now},
})



export default mongoose.model( "Persona", PersonaSchema) // se crea un modelo apartir deñ obketo de arriba. colocar llaves si no lo dejo por default