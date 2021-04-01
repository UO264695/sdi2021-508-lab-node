// Modulos
let express = require('express');
let app = express();

let mongo = require('mongodb');
let swig = require('swig');
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let gestorBD = require("./modules/gestorBD.js");
gestorBD.init(app,mongo);

// Variables
app.set('port', 8081);
app.set('db','mongodb://admin:sdimongo2021@tiendamusica-shard-00-00.lfucn.mongodb.net:27017,tiendamusica-shard-00-01.lfucn.mongodb.net:27017,tiendamusica-shard-00-02.lfucn.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-mcachk-shard-0&authSource=admin&retryWrites=true&w=majority');

require("./routes/rusuarios.js")(app, swig, gestorBD); // (app, param1, param2, etc.)
require("./routes/rcanciones.js")(app, swig, gestorBD); // (app, param1, param2, etc.)

require("./routes/rautores.js")(app, swig);

// Lanzar el servidor
app.listen(app.get('port'), function(){
    console.log('Servidor activado')
});