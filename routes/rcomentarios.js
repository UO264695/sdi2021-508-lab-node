module.exports = function(app, swig, gestorBD) {

    app.post("/comentarios/:id", function(req, res) {
        if(req.session.usuario == null) {
            res.send("Usuario no identificado.");
            return;
        }

        let comentario = {
            autor : req.session.usuario,
            texto : req.body.texto,
            cancion_id : req.params.id
        }

        gestorBD.insertarComentario(comentario, function(result){
            if(result == null)
                res.send("Error al enviar el comentario.");
            else
                res.send(comentario.cancion_id);
        });

    });

};