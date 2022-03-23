const controller = {}

controller.test = (request, response) => {
    const mensajeRecibido = request.body.mensaje
    console.log(request.body)
    response.send({
        message: mensajeRecibido,
        mensajedesdeelservidor:"hey lo he recibido:)"
    })
}

module.exports = controller