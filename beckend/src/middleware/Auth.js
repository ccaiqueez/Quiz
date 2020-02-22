const jwt = require('jsonwebtoken')

const ModelUser = require('../model/User')
const Secret = require('../config/secret')

const { promisify } = require('util')   

module.exports = async (req, res ,next) => {

    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({message: 'User not authorization'})
    }

    try{

        const decoded = await promisify(jwt.verify)(authHeader, Secret)
        
        const id = decoded.id
        
        const user = await ModelUser.findOne({ where: id })

        if(user){
            req.userId = id
            next()
        }
        else{
            return res.status(401).json({error: 'User not authorization'})
        }
    }
    catch(err){
        return res.status(401).json({error: 'Token invalid'})
    }
}