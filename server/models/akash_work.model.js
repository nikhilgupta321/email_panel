const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');


try {
const AkashWork = sequelize.define(
  "akash_work",
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
        type: DataTypes.ENUM("enabled","disabled"),
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
    tableName: "akash_work",
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

module.exports = AkashWork ;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}