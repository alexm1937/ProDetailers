
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

//fields and columns defintions for table
Review.init(
    {
        id: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            references: { model: 'user', key: 'id' }
        }
    },
    {
        hooks: {},
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: false,
        modelName: 'review'
    }
)

module.exports = Review;