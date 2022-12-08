require('dotenv').config(); //Habilita variáveis de Ambiente
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const funcionario = require('./routes/Funcionarios.route');

//Iniciar a API
const app = express()
    .use(express.json())
    .use(cors())
    // Um desse para cada pasta 
    .use('/funcionarios',funcionario); 

app.listen(PORT, () => {
    console.log('Servidor em execução na porta ' + PORT);
});