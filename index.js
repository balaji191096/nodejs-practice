const express = require("express");
 const employeeRouter = require("./router/employeeRouter");
 const mongo = require ("./connect");
 const dotenv = require("dotenv");
 
 dotenv.config();


const app = express();
mongo.connect().then(()=>{ return console.log("connect");})



app.use(express.json());
app.use("/",(req,res,next) =>{
    var auth = {
        authorised : true,
    }
    if(auth.authorised){
        next();
    }else{
       res.send({msg:"Not Authorised"});
    }
    
});



app.use("/employees",employeeRouter);
// Node module Running port
app.listen(process.env.PORT);