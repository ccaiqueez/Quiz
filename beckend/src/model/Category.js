const { Model, DataTypes } = require('sequelize')

class Category extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true
            },
            user: DataTypes.UUID,
            name: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Category