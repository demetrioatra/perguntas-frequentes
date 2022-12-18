const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.listen(8080, () => {console.log('Aplicação iniciada com sucesso!')})

app.get('/', (req, res) => {
    res.status(200).render('index')
})

app.get('/:x', (req, res) => {

    var pergunta = 'O que é'
    var descricao = 'Detalhamento da pergunta'

    res.status(200).render('index', {
        pergunta: pergunta,
        descricao: descricao 
    })
})