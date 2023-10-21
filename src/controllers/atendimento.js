const ServicoAtendimento = require('../services/atendimento.js')
const servico = new ServicoAtendimento()

class ControllerAtendimento{
    async GetAtendimento(req,res){
        try{
            const resultado = await servico.GetAtendimento(req.params.id)
            //console.log(resultado)
            res.status(200).json({
                atendimento: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async GetAtendimentos(_,res){
        try{
            const resultado = await servico.GetAtendimentos()
            res.status(200).json({
                atendimentos: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async AddAtendimento(req,res){
        try{
            const resultado = await servico.AddAtendimento(req.body.dia, req.body.hora, req.body.valor, req.body.concluido)
            res.status(200).json({
                atendimento: resultado
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async UpdateAtendimento(req,res){
        try{
            const resultado = await servico.UpdateAtendimento(req.params.id, req.body.dia, req.body.hora, req.body.valor, req.body.concluido)
            res.status(200).json({
                atendimento: resultado
            })
        }catch{(error)
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async DeleteAtendimento(req,res){
        try{
            const resultado = await servico.DeleteAtendimento(req.params.id)
            res.status(200).json({
                atendimento: resultado
            })
        }catch{(error)
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async GetCachorrosAtendimento(req,res){
        try{
            const resultado = await servico.GetCachorrosAtendimento(req.params.id)
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

module.exports = ControllerAtendimento