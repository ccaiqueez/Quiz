const { Router } = require('express')
const routes = Router()

const AuthMiddleware = require('./middleware/Auth')
const UserController = require('./controller/UserController')
const CategoryController = require('./controller/CategoryController')

routes.post('/user', UserController.store)

routes.use(AuthMiddleware)

routes.post('/category', CategoryController.store)
routes.get('/category', CategoryController.index)
routes.put('/category/:id', CategoryController.update)
routes.delete('/category/:id', CategoryController.delete)

module.exports = routes