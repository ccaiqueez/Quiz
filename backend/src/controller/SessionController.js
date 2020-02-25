const ModelUser = require('../model/User')
const Secret = require('../config/secret')

const jwt = require('jsonwebtoken')

module.exports = {
    async index(req, res){
        const { username, passwod } = req.body

        const user = await ModelUser.findOne({ where: username })

        if(!user){
            return res.status(404).json({error: 'User not found'})
        }

        if(!(await user.checkPassword(passwod))){
            return res.status(404).json({error: 'Password does not match'})
        }

        const { id } = user.dataValues

        return res.status(200).json({
            token: jwt.sign( { id }, Secret, { expiresIn: '7d' })
        })
    }
}