const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');


try{
const Country = sequelize.define(
  "country",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    countryid: {
        type: DataTypes.INTEGER,

    },
    iso: {
        type: DataTypes.STRING(2),
    },
   name: {
        type: DataTypes.STRING(80),
    },
    nicename: {
        type: DataTypes.STRING(80),
    },
   iso3: {
        type: DataTypes.STRING(3),
    },
    numcode: {
        type: DataTypes.SMALLINT,
    },
    phonecode: {
        type: DataTypes.INTEGER,
    }
    
  },
  {
    sequelize,
    tableName: "country",
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
module.exports = Country ;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}