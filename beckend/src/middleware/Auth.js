const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const ModelUser = require('../model/User')
const Secret = require('../config/secret')

module.exports = async (req, res ,next) => {
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({message: 'User not authorization'})
    }

    try{
        const decoded = await promisify(jwt.verify)(authHeader, Secret)

        const idUser = decoded.id
    }
    catch(err){
        return res.status(401).json({error: 'Token invalid'})
    }
}