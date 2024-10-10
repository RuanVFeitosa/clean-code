require('dotenv').config(); // Arquivo => .env
const express = require('express');
const sequelize = require('./config/database');

const app = express(); // Iniciando servidor

app.use(express.json()); // Resposta via JSON

/**
 *  Criar -> POST / api / user / -- { objeto }
 *  Ler -> GET / api / user /
 *  Buscar Unico -> GET/ api/ 3514654
 *  Atualizar -> PUT / api / user / 437862783
 *  Deletar -> DELETE / api / user / 3762579
 */

// process.env ? PORT : 3000
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com banco de dados realizada com sucesso!');
    })
    .catch(err => {
        console.log('Erro ao conectar com banco de dados:', err);
    });

const PORT = process.env.PORT || 3000;

// Listen -> Ouvir
// Ouvindo na possivel ou na porta 3000
app.listen(PORT, () => {
    console.log('---------------------------');
    console.log(`Running on http://${3000}`)
    console.log('---------------------------');
});