const { Model, DataTypes} = require('sequelize')
const bcrypt = require('bcrypt')

class User extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true
            },
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            //Data types of the virtual type are not saved in the database
            password: DataTypes.VIRTUAL,
            password_hash: DataTypes.STRING
        },{
            sequelize
        })
        //Before creating the user, the password is generated in the hash format
        this.addHook('beforeSave', async (user) => {
            if(user.password){
                password_hash = await bcrypt.hash(password, 8)
            }
        })   
        return this
    }
    checkPassword(password){
        return bcrypt.compare(password, this.password_hash)
    }
}

module.exports = User