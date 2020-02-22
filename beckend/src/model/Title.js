const { Model, DataTypes } = require('sequelize')

class Title extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            category: DataTypes.UUID,
            name: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Title