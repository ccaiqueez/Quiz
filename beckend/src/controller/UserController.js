const ModelUser = require('../model/User')
const uuid = require('uuid')

module.exports = {
    async store(req, res){

        const id = uuid()
        const { username, email, password } = req.body

        const user = await ModelUser.create({ id, username, email, password })

        return user ? res.status(201).json(user) : res.status(404).json({error: 'Unable to create user'})
    }
}