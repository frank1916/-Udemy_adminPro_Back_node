//requerimientos
var express = require('express');
var moongose = require('mongoose');
var appRoutes = require('./rutas/app');
var appRoutesUsuario = require('./rutas/usuario');
var appRoutesUsuarioLogin = require('./rutas/login');
var bodyParser = require('body-parser');


//inicializar varaables
var app = express();
//body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//conexion a la bd
moongose.connection.openUri('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log("conectado a bdd " + res)
});



//rutas
app.use('/usuario', appRoutesUsuario);
app.use('/login', appRoutesUsuarioLogin);
app.use('/', appRoutes);

//escuchar servidor
app.listen(3000, () => {
    console.log("servidor corriendo en puerto: \x1b[32m%s\x1b[0m'", '3000');
});