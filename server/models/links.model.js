const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

try{
const Links = sequelize.define(
  "links",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    category: {
        type: DataTypes.ENUM("multi","medical"),

    },
    type: {
        type: DataTypes.ENUM("normal","high","typing"),
    },
   link: {
        type: DataTypes.STRING(255),
    },
    journal_name: {
        type: DataTypes.STRING(255),
    },
  subject: {
        type: DataTypes.STRING(100),
    },
  last_update: {
        type: DataTypes.STRING(255),
    },
    extract_on: {
        type: DataTypes.DATEONLY,
    },
    
        country:{
            type: DataTypes.STRING(255),
        },
      done:{
        type: DataTypes.ENUM("yes","no"),
      },  
    editorial:{
      type: DataTypes.ENUM("yes","no"),
    },
    is_sent:{
      type: DataTypes.ENUM("sent","not-sent"),
    },
    is_max:{
      type: DataTypes.ENUM("true","false"),
    },
    comment:{
      type: DataTypes.STRING(255),
    },
    idm_working:{
      type: DataTypes.ENUM("yes","no"),
    },
    created_at:{
      type: DataTypes.DATE,
    },
    created_by:{
      type: DataTypes.STRING(100),
    },
    updated_at:{
      type: DataTypes.DATE,
    },
    updated_by:{
      type: DataTypes.STRING(255),
    }
  },
  {
    sequelize,
    tableName: "links",
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
module.exports = Links;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}