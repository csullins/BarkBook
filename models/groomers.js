const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class groomers extends Model { }

groomers.init(
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        profile_picture: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: false
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'groomers',
    }

);

groomers.hasMany(Comment, {
    foreignKey: 'groomer_id',
    onDelete: 'CASCADE'
}),

comment.belongsTo(groomer, {

})


module.exports = groomers;