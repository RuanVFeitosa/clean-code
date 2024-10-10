const { DataTypes } = require('sequelize');
const sequelize = require("../config/database")

const User = sequelize.define('User', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true // Timestamps, para armazenar a hora que foi criado
});

module.exports = User;