import express from 'express';
import { sequelize } from './db/index.js';

const server = express();
const port = 3000;

// Conectar ao banco de dados antes de iniciar o servidor
async function startServer() {
    try {
        // Tentando autenticar a conexão com o banco de dados
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados bem-sucedida!');

    } catch (err) {
        console.error('Não foi possível conectar ao banco de dados:', err);
        process.exit(1); // Caso não consiga conectar, o servidor não será iniciado
    }
}

// Iniciar o servidor após a conexão com o banco de dados
server.get('/', async (req, res) => {
    try {
        res.send('Olá Mundo!');
    } catch (err) {
        res.status(500).send('Erro ao consultar o banco de dados.');
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});

// Chama a função para iniciar o servidor
startServer();
