const { Router } = require('express')
const routes = Router()

const AuthMiddleware = require('./middleware/Auth')
const UserController = require('./controller/UserController')

routes.post('/user', UserController.store)

routes.use(AuthMiddleware)

module.exports = routes