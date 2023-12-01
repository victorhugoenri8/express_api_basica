const { response, request} = require("express");

const usuariosGet = (req = request, res = response) => {
    const {q, nombre = "no name", apikey} = req.query;
    res.json({
        nombre: "get desde controller",
        q,
        nombre,
        apikey
    })
}


const usuariospost = (req, res = response) => {
    const {nombre, id} = req.body;
    res.json({
        k: "post desde controller",
       id,
       nombre 
    })
}


const usuariosput = (req, res = response) => {
       const id =req.params.id;
    res.json({
        nombre: "put desde controller",
        id
    })
}

const usuariosdelete = (req, res = response) => {

    res.json({
        nombre: "delete desde controller"
    })
}


module.exports = {
    usuariosGet,
    usuariospost,
    usuariosdelete,
    usuariosput
}

