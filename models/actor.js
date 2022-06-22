import mongoose from "mongoose"

const ActoresSchema = new mongoose.Schema({
    name: {type:String, maxlength:25,required:true},
    image: {type:String,required:true},
    biography: {type:String,required:true, minlength:6},
    createdAt: {type:Date, default:Date.now}
 })

 export default mongoose.model("Actor", ActoresSchema)