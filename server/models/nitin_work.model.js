const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');


try{
const Nitin_work = sequelize.define(
  "nitin_work",
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
      type: DataTypes.DATEONLY,
    },
    enable: {
      type: DataTypes.ENUM("enabled", "disabled"),
    }, 
    created_by: {
           type: DataTypes.STRING(255),
    },
    created_at: {
      type: DataTypes.DATEONLY,
    },
    updated_by: {
     type: DataTypes.STRING(255),
    },
    updated_at: {
      type: DataTypes.DATEONLY,
    }
  },
  {
    sequelize,
    tableName: "nitin_work",
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
module.exports = Nitin_work;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}
