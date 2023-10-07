const Atendimento = require('../models/atendimento.js')
const Cachorro = require('../models/cachorro.js')

class RepositorieAtendimento{

    async GetAtendimento(id, transaction){
        return Atendimento.findOne({
            where: { id },
            transaction,
            include: ['cachorros']
        })
    }

    async GetAtendimento(){
        return Atendimento.findAll()
    }

    async AddAtendimento(dia, hora, valor, concluido){
        return Atendimento.create({
            dia: dia,
            hora : hora,
            valor : valor,
            concluido : concluido
        })
    }

    async UpdateAtendimento(id, dia, hora, valor, concluido){
        return Atendimento.update({
            dia: dia,
            hora : hora,
            valor : valor,
            concluido : concluido
        },{
            where: { id }
        })
    }

    async DeleteAtendimento(id){
        return Atendimento.destroy({
            where: { id }
        })
    }
}

        module.exports = RepositorieAtendimento