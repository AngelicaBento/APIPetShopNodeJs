const conexao = require('../database')
const { DataTypes } = require('sequelize');
const Cachorro = require('./cachorro');

const Cliente = conexao.define('clientes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    telefone: {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    createdAt: false,
    updatedAt: false
}) 

Cachorro.belongsTo(Pessoa, { foreignKey})

module.exports = Cliente