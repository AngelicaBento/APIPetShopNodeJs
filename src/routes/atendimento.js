const express = require('express')
const ControllerAtendimento = require('../controllers/atendimento')

const controller = new ControllerAtendimento()
const router = express.Router()

router.get('/api/getatendimento/:id', controller.GetAtendimento)
router.get('/api/getatendimentos', controller.GetAtendimentos)
router.post('/api/addatendimento', controller.AddAtendimento)
router.put('/api/updateatendimento/:id', controller.UpdateAtendimento)
router.delete('/api/deleteatendimento/:id', controller.DeleteAtendimento)
router.get('/api/getcachorrosatendimento/:id', controller.GetCachorrosAtendimento)

module.exports = router