const express = require('express')

const router = express.Router()

//const Task = require('../models/task');
const Persona = require('../models/persona');

router.get('/', async (req, res) => { //lo que responde a '/'
    const personas = await Persona.find();
    res.render('persona_save', {
        personas
    });             //muestra index.ejs y no le tengo que decir que es el ejs porque lo especifique 
    //res.send('Hello world estas en el home');
    console.log(personas) //muestro las personas por consola
})


router.post('/add_person', async (req, res) => {
    console.log("pasa por ak");
    const persona = new Persona(req.body);
    await persona.save();
    res.redirect("/");
})

router.get("/delete/:id", async (req, res)=> {
    const { id } = req.params;
    await Persona.remove({_id: id});//elimino la persona con ese id
    res.redirect("/");

})


module.exports = router