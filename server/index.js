import express from 'express';
import cors from 'cors';
import router from './routes/formRouter.js';
import { sequelize } from './config/dbconfig.js';


const app=express();
const PORT=4000;
// middleware 

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

// routes

app.use("/form",router);

//connect db
sequelize.sync({force:true}).then(()=>console.log("db connect")).catch((err)=>console.log(err));

//connect to server

app.listen(PORT,()=>{
    console.log(`server start at PORT:${PORT}`);
})


