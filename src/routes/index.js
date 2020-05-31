const express = require('express')

const router = express.Router()

const Task = require('../models/task');

router.get('/', (req, res) => { //lo que responde a '/'
    res.render('index');//muestra index.ejs y no le tengo que decir que es el ejs porque lo especifique 
    //res.send('Hello world estas en el home');
})


router.get('/form', (req, res) => { //lo que responde a '/'
    res.render('form'); 
})

router.post('/add', async (req, res) => {
    const task = new Task(res.body);
    await task.save();
    res.send('recieved');
})

module.exports = router