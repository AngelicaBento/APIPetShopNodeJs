const express = require('express')
const ControllerUsuario = require('../controllers/funcionario.js')
const authMiddleware = require('../middleware/auth.js')

const controller = new ControllerUsuario()
const router = express.Router()

router.post('/api/login', controller.Login)
router.get('/api/usuario/:id', authMiddleware, controller.GetUsuario)
router.get('/api/usuarios/', authMiddleware, controller.GetUsuarios)
router.post('/api/addusuario', authMiddleware, controller.AddUsuario)
router.put('/api/updateusuario/:id', authMiddleware, controller.UpdateUsuario)
router.delete('/api/deleteusuario/:id', authMiddleware, controller.DeleteUsuario)

module.exports = router