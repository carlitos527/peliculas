
import Pelicula from "../models/pelicula.js";
import subirArchivo from "../helpers/subir-archivo.js"

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

const cargarArchivo= async (req, res) => {
    const { id } = req.params;
    try {
        let nombre
        await subirArchivo(req.files, undefined)
            .then(value => nombre = value)
            .catch((err) => console.log(err));

        //persona a la cual pertenece la foto
        let usuario = await Pelicula.findById(id);
        if (usuario.foto) {
            const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
            const pathImage = path.join(__dirname, '../uploads/', usuario.foto);
            
            if (fs.existsSync(pathImage)) {
                console.log('Existe archivo');
                fs.unlinkSync(pathImage)
            }
            
        }
       
        usuario = await Pelicula.findByIdAndUpdate(id, { foto: nombre })
        //responder
        res.json({ nombre });
    } catch (error) {
        res.status(400).json({ error, 'general': 'Controlador' })
    }

}

export { peliculaGet, peliculaGetid, peliculaGetTitulo,  peliculaPost, peliculaDelete,actorPelicula, cargarArchivo}