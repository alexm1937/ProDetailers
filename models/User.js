
const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {

}

//create tables and column definitions for User Model(TABLE);
User.init(
    //table and column definitions:
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmai: true }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [4] }
        }
    },
    //hooks and other properties:
    {
        hooks: {

        },
        //need to pass the sequelize connection instance as well as modelName
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;