const { Model, DataTypes } = require('sequelize')

class Ranking extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            title: DataTypes.UUID,
            point: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}
module.exports = Ranking