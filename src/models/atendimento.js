const Cachorro = require('./cachorro.js')
const { DataTypes } = require('sequelize')
const conexao = require('../database.js')


const Atendimento = conexao.define('atendimento', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    dia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    hora: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    valor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    concluido: {
        type: DataTypes.STRING,
        unique: true
    },

    cachorroId: {
        type: DataTypes.INTEGER,
        references: {
            model: Cachorro,
            key: 'cachorros_id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
}) 

Cachorro.hasMany(Atendimento, { foreignKey: "idCachorro"})
Atendimento.belongsTo(Cachorro, { foreignKey: "idCachorro"})


module.exports = Atendimento