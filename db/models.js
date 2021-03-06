/*created by Pranav Gupta (pg07codes) on 09-08-2018 */

const Sequelize=require('sequelize')
const dt=Sequelize.DataTypes

const dbconfig=require('../config').DB

const db=new Sequelize(dbconfig.NAME,dbconfig.USER,dbconfig.PASSWORD,{
    dialect:'mysql'
})

// all the model definition goes in here ---

const item=db.define("item",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type:dt.INTEGER
    },
    name:{
        allowNull:false,
        type:dt.STRING
    },
    price:{
        allowNull:false,
        type:dt.INTEGER
    },
    mrp:{
        allowNull:false,
        type:dt.INTEGER
    }
})

const college=db.define("college",{
    cId:{
        autoIncrement:true,
        primaryKey:true,
        type:dt.INTEGER
    },
    cName:{
        allowNull:false,
        type:dt.STRING
    }
})

item.belongsTo(college)
college.hasMany(item)

db.sync({
    //alter:true
    //force:true
}).then(()=>console.log("db is synced"))


module.exports={db,item,college}