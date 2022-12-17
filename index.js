const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.listen(8080, () => {
    console.log('Aplicação rodando com sucesso!')
})

app.get('/', (req, res) => {

})