const ServicoCliente = require('../services/cliente.js')
const servico = new ServicoCliente()

class ControllerCliente{
    async GetCliente(req,res){
        try{
            const resultado = await servico.GetCliente(req.params.id)
            console.log(resultado)
            res.status(200).json({
                cliente: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async GetClientes(_,res){
        try{
            const resultado = await servico.GetClientes()
            res.status(200).json({
                clientes: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async AddCliente(req,res){
        try{
            const resultado = await servico.AddCliente(req.body.nome, req.body.telefone)
            res.status(200).json({
                clientes: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async UpdateCliente(req,res){
        try{
            const resultado = await servico.UpdateCliente(req.params.id, req.body.nome, req.body.telefone)
            res.status(200).json({
                cliente: resultado
            })
        }catch{
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async DeleteCliente(req,res){
        try{
            const resultado = await servico.DeleteCliente(req.params.id)
            res.status(200).json({
                cliente: resultado
            })
        }catch{
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async GetCachorrosCliente(req,res){
        try{
            const resultado = await servico.GetCachorrosCliente(req.params.id)
            res.status(200).json({
                cachorros: resultado
            })
        }catch{
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }
}

module.exports = ControllerCliente