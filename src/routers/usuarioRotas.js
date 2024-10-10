const { Router } = require('express');
const userController = require('../controllers/userController')

const router = Router();

// Função de criar
router.post('/', userController.create)

// Função de editar
router.put('/:id', userController.update) // Paramentro id

// Função de deletar
router.delete('/:id', userController.delete) // Paramentro id

// Função buscar unico
router.get('/:id', userController.getOne ) // Paramentro id

// Função buscar todos
router.get('/', userController.getAll)


module.exports = router;