const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

try{
const LinkFind = sequelize.define(
  "linkfind",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    status: {
        type: DataTypes.STRING(10),

    },
    
    subject: {
        type: DataTypes.STRING(255),
    },
    country: {
        type: DataTypes.STRING(255),
    },
  
      created_at:{
        type: DataTypes.TIME,
      },  
      created_by:{
        type: DataTypes.STRING(100),
      }
    
  },
  {
    sequelize,
    tableName: "linkfind",
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
module.exports = LinkFind;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}