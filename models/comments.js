const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class comment extends Model { }

comment.init(
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        groomer_id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            references: {
                model: 'groomers',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }

);