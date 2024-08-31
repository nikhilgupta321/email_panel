const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

try{
const EmailStatus = sequelize.define(
  "emailstatus",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    type: {
        type: DataTypes.STRING(100),

    },
    mailtype: {
        type: DataTypes.STRING(255),
    },
    subject: {
        type: DataTypes.STRING(100),
    },
    country: {
        type: DataTypes.STRING(255),
    },
  email_count: {
        type: DataTypes.STRING(100),
    },
  journals: {
        type: DataTypes.STRING(255),
    },
    emailsfile: {
        type: DataTypes.STRING(255),
    },
    
        sent_with:{
            type: DataTypes.TEXT,
        },
      created_at:{
        type: DataTypes.TIME,
      }  ,
      sent_at: {
        type: DataTypes.TIME,
      },
      status:{
        type: DataTypes.ENUM("enabled","disabled"),
      },
    created_by:{
        type: DataTypes.STRING(100),
    },
    updated_by:{
        type: DataTypes.STRING(100),
    },
    updated_at:{
        type: DataTypes.TIME,
    }
  },
  {
    sequelize,
    tableName: "emailstatus",
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
module.exports = EmailStatus;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}