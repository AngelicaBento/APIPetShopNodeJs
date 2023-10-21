const RepositorieUsuario = require("../repositories/funcionario.js");

const repositorio = new RepositorieUsuario()

class ServicoUsuario {
    
    VerficarUsuario(usuario) {
        if(!usuario){
            throw new Error('Não foi enviada o usuario para adicionar');
        } else if(!usuario.nome){
            throw new Error('Não foi enviado o nome do usuario');
        } else if(!usuario.email){
            throw new Error('Não foi enviado o email do usuario');
        } else if(!usuario.senha){
            throw new Error('Não foi enviado a senha do usuario');
        }

        return true
    }

    async GetUsuario(usuario_id, transaction) {
        return repositorio.GetUsuario(usuario_id, transaction);
    }

    async GetUsuarioPorEmail(email) {
        return repositorio.GetUsuarioPorEmail(email);
    }

    async GetUsuarios() {
        return repositorio.GetUsuarios();
    }

    async AddUsuario(usuario_id, transaction) {
        this.VerficarUsuario(usuario)

        return repositorio.AddUsuario(usuario_id, transaction);
    }

    async UpdateUsuario(id, usuario) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do usuario para alterar');
        } 
        this.VerficarUsuario(usuario)

        return repositorio.UpdateUsuario(id, usuario);
    }

    async DeleteUsuario(id) {
        return repositorio.DeleteUsuario(id);
    }

} 

module.exports = ServicoUsuario