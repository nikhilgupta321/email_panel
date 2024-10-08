const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');


try {
const Archive = sequelize.define(
  "archives",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    year: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    publishdate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    refnumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    ptype: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    txnid: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    volume: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    issue: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    authorname: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    abstract: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    keywords: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    file: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    pagenumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    status: {
      type: DataTypes.ENUM("enabled", "disabled"),
      allowNull: false,
      defaultValue: "enabled",
    },
    mobile: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    modifiedby: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    modification: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    createdby: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    creation: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "archives",
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

module.exports = Archive ;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}
