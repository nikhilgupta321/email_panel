const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');


try{
const Emails = sequelize.define(
  "emails",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    status: {
        type: DataTypes.STRING(255),

    },
    mailtype: {
        type: DataTypes.STRING(255),
    },
    subject: {
        type: DataTypes.STRING(255),
    },
    country: {
        type: DataTypes.STRING(255),
    },
  email_count: {
        type: DataTypes.STRING(100),
    },
  email: {
        type: DataTypes.STRING(255),
    },
    emailsfile: {
        type: DataTypes.STRING(255),
    },
    
        date:{
            type: DataTypes.DATEONLY,
        },
      createdat:{
        type: DataTypes.DATE,
      },
      created_by:{
        type:DataTypes.STRING(255),
      }  
    
  },
  {
    sequelize,
    tableName: "emails",
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
module.exports = Emails;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}