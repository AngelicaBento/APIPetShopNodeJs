const Cliente = require('../models/cliente.js')
const Cachorro = require('../models/cachorro.js')

class RepositorieCliente{

    async GetCliente(id, transaction){
        return Cliente.findOne({
            where: { id },
            transaction,
            include: ['cachorros']
        })
    }

    async GetClientes(){
        return Cliente.findAll()
    }

    async AddCliente(nome, telefone){
        return Cliente.create({
            nome: nome,
            telefone: telefone
        })
    }

    async UpdateCliente(id, nome, telefone){
        return Cliente.update({
            nome: nome,
            telefone: telefone
        },{
            where: { id }
        })
    }

    async DeleteCliente(id){
        return Cliente.destroy({
            where: { id }
        })
    }
}

        module.exports = RepositorieCliente