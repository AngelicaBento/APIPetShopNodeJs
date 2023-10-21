const ServicoUsuario = require("../services/funcionario.js")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config') 


const servico = new ServicoUsuario()

class ControllerUsuario {

    async Login(req, res){
        const { email, senha } = req.body 

        if(!email || !senha){
            return res.status(401).json({ message: "E-mail ou senha inválido" });
        }
        const { dataValues: usuario } = await servico.GetUsuarioPorEmail(email)

        if(!Usuario){
            console.log('erro1')
            return res.status(401).json({ message: 'Email ou senha inválido' })
        }

        if(!(await bcrypt.compare(senha, usuario.senha))){
            console.log('erro2')
            return res.status(401).json({ message: 'Email ou senha inválido' })
        }

        const token = jwt.sign(
            {id: usuario.id, email: pessoa.email, nome: pessoa.nome},
            config.secret
        )

        res.json({token})

    }

    async GetUsuario(req, res){
        try {
            console.log(req.params.id)
            const result = await servico.GetUsuario(req.params.id)
            res.status(200).json({
                usuario: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }
    
    async GetUsuarios(_, res){
        try {
            const result = await servico.GetUsuarios()
            res.status(200).json({
                usuarios: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async AddUsuario(req, res){
        try {
            const result = await servico.AddUsuario(req.body.usuario)
            res.status(201).json({
                usuario: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async UpdateUsuario(req, res){
        try {
            const result = await servico.UpdateUsuario(req.params.id, req.body.usuario)
            res.status(200).json({
                usuario: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async DeleteUsuario(req, res){
        try {
            await servico.DeleteUsuario(req.params.id)
            res.status(204)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

}

module.exports = ControllerUsuario