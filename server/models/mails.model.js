const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

try{
const Mails = sequelize.define(
  "mails",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(255),

    },
    email: {
        type: DataTypes.STRING(255),
    },
   password: {
        type: DataTypes.STRING(255),
    },
    status: {
        type: DataTypes.STRING(100),
    },
  owner: {
        type: DataTypes.STRING(255),
    },
  tenmails: {
        type: DataTypes.STRING(255),
    },
    com_date: {
        type: DataTypes.DATEONLY,
    },
    
        com_date2:{
            type: DataTypes.DATEONLY,
        },
      com_date3:{
        type: DataTypes.DATEONLY,
      },  
    com_date4:{
      type: DataTypes.DATEONLY,
    },
   req_date:{
      type: DataTypes.DATEONLY,
    },
    req_date2:{
      type: DataTypes.DATEONLY,
    },
    req_date3:{
      type: DataTypes.DATEONLY,
    },
    req_date4:{
      type: DataTypes.DATEONLY,
    },
    created_at:{
      type: DataTypes.DATE,
    },
    created_by:{
      type: DataTypes.STRING(100),
    },
    updated_at:{
      type: DataTypes.DATE,
    }
  },
  {
    sequelize,
    tableName: "mails",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
    ],
  }
);
module.exports = Mails;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}