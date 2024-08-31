const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

try{

const LinkEditors = sequelize.define(
  "linkeditors",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    lid: {
        type: DataTypes.INTEGER,

    },
    name: {
        type: DataTypes.STRING(255),
    },
    email: {
        type: DataTypes.STRING(255),
    },
    phone: {
        type: DataTypes.STRING(100),
    },
  bulk_mail: {
        type: DataTypes.TEXT,
    },
 is_sent: {
        type: DataTypes.ENUM("sent","not-sent"),
    },
    created_at: {
        type: DataTypes.TIME,
    },
    
        updated_at:{
            type: DataTypes.TIME,
        },
      created_by:{
        type: DataTypes.STRING(100),
      },
       updated_by:{
        type: DataTypes.STRING(100),
       }
  },
  {
    sequelize,
    tableName: "linkeditors",
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
module.exports = LinkEditors;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}