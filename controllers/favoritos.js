import Favorito from '../models/favoritos.js'

const favoritoPost= async (req,res)=>{
    const {idpelicula,idUsuario}=req.body
    const favorito= new Favorito({idpelicula,idUsuario})
    favorito.save()
    res.json({
        favorito
    })
}

const favoritoGet= async (req,res)=>{  
    const favorito= await Favorito.find()
    .populate("idPelicula",["title","genre"])
    .populate("idUsuario",["nombre","apellido"])
    res.json({
        favorito
    })
}

export {favoritoGet,favoritoPost}