const express = require('express');
const path = require('path');//para el join
const morgan = require('morgan');//middleware
const mongoose = require('mongoose');


const app = express();

//conectar a bdd
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('DB connected'))//tira este mensaje si se conecto
    .catch(err => console.log(err))//tira esto si no conecto

//importing routes
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000)//le doy puerto 3000 si no me da otro
app.set('views', path.join(__dirname, 'views'))//le doy con path join para usarlo en distintos SO
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));//para que me tire estadisticas y data en la consola
app.use(express.urlencoded({extended:false}));//para entender los datos que se envian al server

//routes
app.use('/', indexRoutes);

//inicia el servidor con el puerto de settings
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})
