const RepositorieAtendimento = require('../repositories/atendimento.js')
const repositorie = new RepositorieAtendimento()

class ServicoAtendimento{

    async GetAtendimento(id, transaction){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorie.GetAtendimento(id, transaction)
    }

    async GetAtendimentos(){
        return repositorie.GetAtendimentos()
    }

    async AddAtendimento(dia, hora, valor, concluido){
        return repositorie.AddAtendimento(dia, hora, valor, concluido)
    }

    async UpdateAtendimento(id, dia, hora, valor, concluido){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorie.UpdateAtendimento(id,dia, hora, valor, concluido)
    }

    async DeleteAtendimento(id){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorie.DeleteAtendimento(id)
    }

    async GetCachorrosAtendimento(id){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorie.GetCachorrosAtendimento(id)
    }
}

module.exports = ServicoAtendimento