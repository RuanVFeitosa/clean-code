const { Router } = require("express")
const userRoutes = require('./usuarioRotas')
const admRoutes = require('./admRotas')
const router = Router();

router.use('/user', userRoutes);
router.use('/adm', admRoutes);

module.exports = router;