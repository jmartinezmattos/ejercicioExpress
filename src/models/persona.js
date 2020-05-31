//defino la  'tabla' el esquema para la bdd

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonaSchema = new Schema({

    nombre: String,
    apellido: String,
    edad: Int16Array,
    ci: String

});


module.exports = mongoose.model('tasks',PersonaSchema)//se almacenan en 'tasks'