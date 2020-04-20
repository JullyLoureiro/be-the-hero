const express = require('express')
const routes = require('./routes')
const cors = require('cors') 

const app = express()

app.use(cors())

//Vai no corpo da requisição e converte JSON para Object JS
app.use(express.json())
app.use(routes)

app.listen(3333)