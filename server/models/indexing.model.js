const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');


try{
const Indexing = sequelize.define('indexing', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  status: {
    type: "SET('enabled','disabled')",
    allowNull: false
  },
  sortnumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  link: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  creation: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'indexing',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
  ]
});
module.exports = Indexing;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}