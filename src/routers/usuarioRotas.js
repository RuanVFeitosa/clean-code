const { Router } = require('express');
const userController = require('../controllers/userController')
const { validateUser, validateUserId }= require ('../middlewares/validateUser');
const authenticateToken = require('../middlewares/validateToken');

const router = Router();

// Função de criar
router.post('/', validateUser, userController.create)

// Função de editar
router.put('/:id', validateUser, validateUserId, userController.update) // Paramentro id

// Função de deletar
router.delete('/:id', authenticateToken, validateUserId, userController.delete) // Paramentro id

// Função buscar unico
router.get('/:id', validateUserId, userController.getOne ) // Paramentro id

// Função buscar todos
router.get('/', userController.getAll)


module.exports = router;