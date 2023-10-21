const express = require('express')
const router = require('./src/routes/atendimento.js')
const routerc = require('./src/routes/cachorro.js')
const routerf = require('./src/routes/funcionario.js')

const app = express()
const port = 3000

app.use(express.json())
app.use(router)
app.use(routerc)
app.use(routerf)

app.listen(port, () => {
    console.log(`>>> Servidor rodando na porta ${port} <<<`)
})