const conexao = require('../database.js')
const { DataTypes } = require('sequelize');

const Cachorro = conexao.define('cachorro', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    dono: {
        type: DataTypes.INTEGER,
        references:{
            model: 'clientes',
            key: 'id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
})

module.exports = Cachorro