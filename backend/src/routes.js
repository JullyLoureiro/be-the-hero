const express = require('express')
const OngController = require('./controller/OngController')
const IncidentsController = require('./controller/IncidentController')
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController')
const routes = express.Router()
const { celebrate, Segments, Joi } = require('celebrate')

//ONGS
routes.get('/ongs', OngController.list)

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}) ,OngController.create)

//INCIDENTS
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}) ,IncidentsController.list)

routes.post('/incidents', IncidentsController.create)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}) ,IncidentsController.delete)

//PROFILE
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}) ,ProfileController.list)

//SESSIONS
routes.post('/sessions', SessionController.login)

module.exports = routes