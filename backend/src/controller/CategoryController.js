const ModelCategory = require('../model/Category')
const uuid = require('uuid')

module.exports = {
    async store(req, res){
        const id = uuid()        
        const { user, name } = req.body

        const category = await ModelCategory.create({
            id, user, name
        })

        return category ? res.status(201).json(category) : res.status(404).json({error: 'Unable to create Category'})
    },
    async index(req, res){
        const { user } = req.body

        const category = await ModelCategory.findAll({ where: { user }})

        return category ? res.status(200).json(category) : res.status(404).json({error: 'Could not find Category'})
    },
    async update(req, res){
        const { id } = req.query
        const { name } = req.body

        const category = await ModelCategory.update({ 
            name, where: { name } })

        return category ? res.status(200).json(category) : res.status(404).json({error: 'Unable to update data of Category'})
    },
    async delete(req, res){
        const { id } = req.query

        const category = await ModelCategory.destroy({ where: { id } })

        return category ? res.status(200).json({success: 'Successful category exclusion'}) : res.status(404).json({error: 'Unable to delete category'})
    }
}