const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const yup = require('yup');

const app = express();

app.use(helmet());
app.use(morgan('short'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Insira um ID para pesquisar'
    })
})

app.post('/', (req, res) => {
    const body = req.body.message;
    res.send(body.message);
})

const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Ouvindo na porta localhost:${port}`);
})