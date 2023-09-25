import { Sequelize } from "sequelize";
import { sequelize } from "../config/dbconfig.js";

export const Information=sequelize.define("infomation",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
name:{
    type:Sequelize.STRING,
    allowNull:false
},
phone:{
    type:Sequelize.STRING
}

})

