const config = require('../config/database')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(config)

const Category = require('../model/Category')
const Question = require('../model/Question')
const Ranking = require('../model/Ranking')
const Title = require('../model/Title')
const User = require('../model/Category')

const models = [ Category, Question, Ranking, Title, User]

models.map(model => model.init(sequelize))

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}