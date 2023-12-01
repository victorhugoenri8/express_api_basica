const { Router } = require("express");
const { usuariosGet, usuariospost, usuariosput, usuariosdelete } = require("../controllers/users.controllers");

const router = Router();


router.get('/', usuariosGet)


router.post('/', usuariospost)


router.put('/:id', usuariosput)
router.delete('/', usuariosdelete)



module.exports = router;