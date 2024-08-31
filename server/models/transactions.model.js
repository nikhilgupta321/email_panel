const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

try{
const Transactions = sequelize.define(
  "transactions",
  {
    transactionid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    txnid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    ctxnid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    journal: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    refnumber: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    paymenttypes: {
      type: DataTypes.STRING(167),
      allowNull: true,
    },
    paymentmode: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    done: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    txncode: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      secret: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      secretkey: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      creation: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      paymenttype: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      isused: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      remark: {
        type: DataTypes.TEXT,
        allowNull: true,
      }  
  },
  {
    sequelize,
    tableName: "transactions",
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
module.exports = Transactions;
} catch (error) {
  console.error('Error defining Sequelize model:', error);
}
