const { DataTypes } = require('sequelize');
const sequelize = require("../config/database")

const adm = sequelize.define('adm', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true // Timestamps, para armazenar a hora que foi criado
});

module.exports = adm;