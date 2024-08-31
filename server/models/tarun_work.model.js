const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

try{
const Tarun_work = sequelize.define(
  "tarun_work",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    work: {
      type: DataTypes.TEXT,
    },
    status: {
           type: DataTypes.STRING(255),
    },
    completed_at: {
      type: DataTypes.DATE,
    },
    enable: {
      type: DataTypes.ENUM("enabled", "disabled"),
    }, 
    created_by: {
     type: DataTypes.STRING(255),
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_by: {
     type: DataTypes.STRING(255),
    },
    updated_at: {
      type: DataTypes.DATE,
    }
  },
  {
    sequelize,
    tableName: "tarun_work",
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
module.exports = Tarun_work;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}
