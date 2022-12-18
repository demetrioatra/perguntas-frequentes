const express = require('express')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.listen(8080, () => {console.log('Aplicação iniciada com sucesso!')})

app.get('/', (req, res) => {
    res.status(200).render('index')
})

app.get('/pergunta', (req, res) => {
    res.status(200).render('pergunta')
})
