import bcryptjs from "bcryptjs";

import Persona from "../models/persona.js";

const personaGet= async(req, res)=>{
    const peliculas = await Persona
        .find()// buscar todo lo que tenga en persona...
        .populate("Actor",["name","image"])

    res.json({
        peliculas
    })
}

const personaPut = async (req, res)=> {
    const {id} =req.params;
    const {_id, createAt, idactor, ...resto}=req.body;
    const modificar = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        modificar
    })
}


const personaPost= async(req,res)=>{
    const {cc,nombre,apellido,edad,email,password}=req.body
    const persona= new Persona({cc,nombre,apellido,edad,email,password})
    persona.save()// guarda en la base de datos
    res.json({
        persona
    })
}

const personaGetLogin= async (req,res)=>{
    const { email, password } = req.query;

        try {
            const persona = await Persona.findOne({ email })
            if (!persona) {
                return res.status(400).json({
                    msg: "Persona / Password no son correctos"
                })
            }


            if (persona.estado === 0) {
                return res.status(400).json({
                    msg: "Persona Inactivo"
                })
            }

            const validPassword = bcryptjs.compareSync(password, persona.password);
            if (!validPassword) {
                return res.status(400).json({
                    msg: "Persona / Password no son correctos"
                })
            }

            const token = await generarJWT(persona.id);

            res.json({
                persona,
                token
            })

        } catch (error) {
            return res.status(500).json({
                msg: "Hable con el WebMaster"
            })
        }
}

const personaDelete=async(req,res)=>{
    const {email}=req.query
    const persona= await Persona.findOneAndDelete({email})
    res.json({
        msg:"Registro Eliminado",
        persona
    })
}

        



export {personaGet,personaPut, personaPost, personaGetLogin,personaDelete}