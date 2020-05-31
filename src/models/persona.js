//defino la  'tabla' el esquema para la bdd

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonaSchema = new Schema({

    nombre: String,
    apellido: String,
    edad: Number,
    ci: String

});


module.exports = mongoose.model('personas',PersonaSchema)//se almacenan en 'personas'