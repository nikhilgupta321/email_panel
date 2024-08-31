const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

try{
const User = sequelize.define('users', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: '',
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: '',
  },
  status: {
    type: "SET('ENABLED','DISABLED','PENDING')",
    allowNull: false,
    defaultValue: 'ENABLED',
  },
}, {
  sequelize,
  tableName: 'users',
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

module.exports = User ;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}