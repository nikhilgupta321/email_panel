const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');


try{
const Emails_count = sequelize.define(
  "emails_count",
  {
    countryid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  createdat: {
   date: { type: Date, default: Date.now }
    },
    name: {
           type: DataTypes.DATE,
    },
  
  },
  {
    sequelize,
    tableName: "emails_count",
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
module.exports = Emails_count;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}
