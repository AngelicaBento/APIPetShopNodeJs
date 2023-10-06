const Cachorro = require('./cachorro.js')
const { DataTypes } = require('sequelize')
const conexao = require('../database.js')


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

Cliente.hasMany(Cachorro, { foreignKey: "idCliente"})
Cachorro.belongsTo(Cliente, { foreignKey: "idCliente"})

module.exports = Cliente