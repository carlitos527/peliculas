
import Pelicula from "../models/pelicula.js";

const peliculaGet = async (req, res) => {
    const peliculas = await Pelicula.find()// buscar todo lo que tenga en persona...
    res.json({
        peliculas
    })
}

const peliculaGetid = async (req, res) => {
    const { id } = req.query
    const peliculas = await Pelicula.find(id)
    res.json({
        peliculas
    })

}

const peliculaGetTitulo= async (req, res) => {
    const { titulo } = req.body
    const pelicula = await Pelicula.find({
        $or: [
            { titulo: new RegExp(titulo, "i") },
            
        ]
    })
    res.json({
        pelicula
    })
}

const peliculaPost = async (req, res) => {
    const { titulo, formato, genero, idioma, director, pais, reparto } = req.body
    const pelicula = new Pelicula({ titulo, formato, genero, idioma, director, pais, reparto })
    pelicula.save()// guarda en la base de datos
    res.json({
        pelicula
    })
}

const peliculaDelete = async (req, res) => {
    const {id} = req.query
    const pelicula = await Pelicula.findOneAndDelete({ id })
    res.json({
        pelicula,
        msg: "Registro Eliminado"
    })
}

const actorPelicula = async (req, res)=>{
    const {id}=req.params;
    const peliculas = await Pelicula.find().where('reparto.idactor').in(id).exec();
    res.json({
        peliculas
    })
}

export { peliculaGet, peliculaGetid, peliculaGetTitulo,  peliculaPost, peliculaDelete,actorPelicula}