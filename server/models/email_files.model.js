const {DataTypes} =require('sequelize');
const {sequelize} =require('../config/config');

const EmailFiles=sequelize.define('email_files',{
    id:{
        autoIncrement: true,
        primaryKey:true,
        type:DataTypes.INTEGER,
        allowNull:false
    },
    country :{
        type:DataTypes.STRING,
        defaultValue:'',
    },
    state:{
        type:DataTypes.STRING,
        defaultValue:''
    },
    file:{
        type:DataTypes.STRING,
        defaultValue:''
    },
    created_at:{
        type:DataTypes.TIME,
        defaultValue:'2024-04-15 13:14:23'
    },
    created_by:{
        type:DataTypes.STRING,
        defaultValue:''
    }
},{
    sequelize,
    tableName:'email_files',
    timestamps:false,
    indexes:[
        {
            name:'PRIMARY KEY',
            unique:true,
            using:'BTREE',
            fields:[
                {name:"id"},
            ]
        }
    ]
});

module.exports=EmailFiles;