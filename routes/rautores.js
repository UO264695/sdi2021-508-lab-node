module.exports = function(app, swig) {

    app.get("/autores", function(req, res) {
        let autores = [{
            "nombre" : "Freddie Mercury",
            "grupo" : "Queen",
            "rol" : "cantante"
        }, {
            "nombre" : "Jon Buckland",
            "grupo" : "Coldplay",
            "rol" : "guitarrista"
        }, {
            "nombre" : "Ringo Star",
            "grupo" : "The Beatles",
            "rol" : "bateria"
        }];

        let respuesta = swig.renderFile('views/autores.html', {
            autores : autores
        });

        res.send(respuesta);
    });

    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {});
        res.send(respuesta);
    })

    app.get("/autores/:id", function(req, res) {
        let respuesta = 'id: ' + req.params.id;
        res.send(respuesta);
    });

    app.get('/autores*', function (req, res) {
        res.redirect('/autores');
    });

    app.post("/autor", function(req,res){
        res.send("Autor agregado: " + req.body.nombre + "<br>"
            + " grupo: " + req.body.grupo + "<br>"
            + " rol: " + req.body.rol);
    })


};