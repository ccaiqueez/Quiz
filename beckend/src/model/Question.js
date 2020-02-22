const { Model, DataTypes } = require('sequelize')

class Question extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            title: DataTypes.UUID,
            asking: DataTypes.STRING,
            response: DataTypes.STRING,
            order: DataTypes.INTEGER
        })
    }
}

module.exports = Question