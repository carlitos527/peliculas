import Actor from '../models/actor.js';

const ActorPost= async (req,res) => {
    const {name,biography,image}=req.body
    const actor= new Actor({name,biography,image})
    actor.save()

    res.json({
        actor
    })
}

const actorGet= async (req, res) => { /* async es otro componente que completa al await */
    const actores= await Actor.find(); /* await para que espere mientras el servidor busca  */
    res.json({
        actores
    })
}

const actorGetId= async (req, res) => { /* async es otro componente que completa al await */
    const {id}=req.params
    const actor= await Actor.findById(id); /* await para que espere mientras el servidor busca  */
    res.json({
        actor
    })
}

const actorGetName = async (req,res) => {
    const {name}=req.query
    const actores = await Actor.find({name:new RegExp(name,"i")});
    res.json({
        actores
    })
}

const actorDelete= async (req, res) => {
    const {id}=req.params
    const actor= await Actor.findByIdAndDelete(id);
    res.json({
        actor
    }) 
}

export {ActorPost,actorGet,actorGetId,actorGetName,actorDelete}