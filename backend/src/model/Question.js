const { Model, DataTypes } = require('sequelize')

class Question extends Model{
    static init(sequelize){
        super.init({
            titleId: {
                type: DataTypes.UUID,
                references: { model: 'title', key: 'id'}
            },
            asking: DataTypes.STRING,
            response: DataTypes.STRING,
            order: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = Question