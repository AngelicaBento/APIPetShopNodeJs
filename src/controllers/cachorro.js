const ServicoCachorro = require('../services/cachorro.js')
const servico = new ServicoCachorro()

class ControllerCachorro{
    async GetCachorro(req,res){
        try{
            const resultado = await servico.GetCachorro(req.params.id)
            res.status(200).json({
                cachorro: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async GetCachorros(_,res){
        try{
            const resultado = await servico.GetCachorros()
            res.status(200).json({
                cachorros: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async AddCachorro(req,res){
        try{
            const resultado = await servico.AddCachorro(req.body.nome, req.body.dono)
            res.status(200).json({
                cachorro: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async UpdateCachorro(req,res){
        try{
            const resultado = await servico.UpdateCachorro(req.params.id, req.body.nome, req.body.dono)
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

    async DeleteCachorro(req,res){
        try{
            const resultado = await servico.DeleteCachorro(req.params.id)
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
}

module.exports = ControllerCachorro