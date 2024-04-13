import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({"mensagem": "Olá, se você está vendo essa mensagem é porque o servidor está funcionando"})
});

app.get('/listar', (req, res) => {
    const filePath = path.join(__dirname, '../assets/data.json');

    fs.readFile(filePath, "utf8", (err, data) => {
        if(err) {
            console.log('Erro ao ler arquivo:', err);
            res.status(500).send('Erro ao ler o arquivo JSON');
            return;
        }

        const jsonData = JSON.parse(data);

        res.status(200).json(jsonData);
    })
});

app.listen(3000, () => {
    console.log('Servidor executando no endereço http://localhost:3000');
})