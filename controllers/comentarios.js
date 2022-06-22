import Comentario from "../models/comentarios.js"

const comentarios={
    comentarioPost: async (req, res)=>{
        const {comment,idPelicula,idUsuario}=req.body
        const comentario= new Comentario({comment,idPelicula,idUsuario})
        comentario.save()
        res.json({
            comentario
        })
    },
    
    comentarioGet: async (req,res)=>{ 
        const {idPelicula,idUsuario}=req.body
        const comentario= await Comentario.find({idPelicula,idUsuario})
        .populate("idPelicula",["title"])
        .populate("idUsuario",["nombre","apellido","edad","email"])
        .populate("comment",["comment"])
        res.json({
            comentario
        })
    }
}

export {comentarios}