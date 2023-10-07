const RepositorieAtendimento = require('../repositories/atendimento')
const atendimento = new RepositorieAtendimento()

class ServicoAtendimento{

    async GetAtendimento(id, transaction){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!")
        }
        return atendimento.GetAtendimento(id, transaction)
    }

    async GetAtendimentos(){
        return atendimento.GetAtendimentos()
    }

    async AddAtendimento(dia, hora, valor, concluido){
        return atendimento.AddAtendimento(dia, hora, valor, concluido)
    }

    async UpdateAtendimento(id, dia, hora, valor, concluido){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!")
        }
        return atendimento.UpdateAtendimento(id,dia, hora, valor, concluido)
    }

    async DeleteAtendimento(id){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!")
        }
        return atendimento.DeleteAtendimento(id)
    }

    async GetCachorrosAtendimento(id){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!")
        }
        return atendimento.GetCachorrosAtendimento(id)
    }
}

module.exports = ServicoAtendimento