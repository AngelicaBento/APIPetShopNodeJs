const Cliente = require('./cliente.js');
const { DataTypes } = require('sequelize');
const conexao = require('../database.js');

const Usuario = conexao.define('usuarios', {
    usuarioId : {
        field: 'usuario_id',
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
   senha: {
        type: DataTypes.STRING,
        allowNull: false
    },

    nivel_permissao: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    createdAt: false,
    updatedAt: false
})

module.exports = Usuario