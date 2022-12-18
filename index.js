const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//--------------------------------------------------------//

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.listen(8080, () => {console.log('Aplicação iniciada com sucesso!')})

//------------------------ Rotas -------------------------//

app.get('/', (req, res) => {
    res.status(200).render('index')
})

app.get('/pergunta', (req, res) => {
    res.status(200).render('pergunta')
})

app.post('/salvar', (req, res) => {
    var titulo = req.body.titulo;
    res.status(200).send('Pergunta "' + titulo + '" salva com sucesso!')
})
