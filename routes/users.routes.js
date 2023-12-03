const { Router } = require("express");

//se desestructuran las funciones dentro del archivo controlador
const { usuariosGet, usuariospost, usuariosput, usuariosdelete } = require("../controllers/users.controllers");

const router = Router();

//la logica se separa en controladores que estan en /controllers/nombre
router.get('/', usuariosGet)


router.post('/', usuariospost)


router.put('/:id', usuariosput)
router.delete('/', usuariosdelete)



module.exports = router;