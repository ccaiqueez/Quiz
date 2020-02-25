const ModelQuestion = require('../model/Question')

module.exports = {
    async store(req, res){
        const { id } = req.query
        const { asking, response, order } = req.body

        const question = await ModelQuestion.create({
            id, asking, response, order
        })
        
        return question ? res.status(201).json(question) : res.status(404).json({error: 'Unable to create question'})
    },
    async index(req, res){
        const { titleId, order } = req.query

        const question = await ModelQuestion.findOne({
            where: { titleId, order }
        })

        return question ? res.status(200).json(question) : res.status(404).json({error: 'Could not find Question'})
    },
}