const Cliente = require('./cliente.js')
const { DataTypes } = require('sequelize');
const conexao = require('../database.js');
const Atendimento = require('./atendimento.js');


const Cachorro = conexao.define('cachorros', {
    cachorrosId: {
        field: 'cachorros_id',
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
        references: {
            model: Cliente,
            key: 'id'
        }
    }

}, {
    createdAt: false,
    updatedAt: false
})

module.exports = Cachorro