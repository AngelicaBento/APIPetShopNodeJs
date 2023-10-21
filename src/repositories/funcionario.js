const Usuario = require('../models/funcionario.js')
const bcrypt = require('bcrypt')


class RepositorieUsuario {

    async GetUsuario(usuario_id, transaction) {
        return Usuario.findOne({
            where: { id }
        });
    }

    async GetUsuarioPorEmail(email) {
        return Usuario.findOne({
            where: { email }
        });
    }
    
    async GetUsuarios() {
        return Usuario.findAll();
    }

    async AddUsuario(email, senha) {
        const hashSenha = await bcrypt.hash(usuario.senha, 10)

        usuario.senha = hashSenha
        const result = await Usuario.create(
            
            { emai, senha : hashSenha },
        )

        return result
    }

    async UpdateUsuario(id, email, senha) {
        return Usuario.update({
            email: email,
            senha: senha
        }, {
            where: { usuario_id: id }
        })
    }

    async DeleteUsuario(id) {
        return Usuario.destroy({
            where: { usuario_id: id }
        });
    }

}

module.exports = RepositorieUsuario