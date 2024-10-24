const { Router } = require('express');
const admController = require('../controllers/admController')
const { validateAdm, validateAdmId }= require ('../middlewares/validateAdm')

const router = Router();

// Função de criar
router.post('/', validateAdm, admController.create)

// Função de editar
router.put('/:id', validateAdm, validateAdmId, admController.update) // Paramentro id

// Função de deletar
router.delete('/:id', validateAdmId, admController.delete) // Paramentro id

// Função buscar unico
router.get('/:id', validateAdmId, admController.getOne ) // Paramentro id

// Função buscar todos
router.get('/', admController.getAll)

router.post('/login', admController.login)

router.post('/esqueci', admController.esqueciSenha)


module.exports = router;