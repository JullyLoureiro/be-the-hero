const express = require('express')
const OngController = require('./controller/OngController')
const IncidentsController = require('./controller/IncidentController')
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController')
const routes = express.Router()

//ONGS
routes.get('/ongs', OngController.list)
routes.post('/ongs', OngController.create)

//INCIDENTS
routes.get('/incidents', IncidentsController.list)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

//PROFILE
routes.get('/profile', ProfileController.list)

//SESSIONS
routes.post('/sessions', SessionController.login)

module.exports = routes