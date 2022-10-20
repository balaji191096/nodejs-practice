const {connect} = require("../connect");
// GET Employees data function

module.exports.getEmployees =async  (req,res) => {
   try{
    const employeesData = await connect.collection("employees").find().toArray();
    res.send(employeesData);
    
   }catch(err){
    console.error(err);
    res.status(500).send(err);
   }
};
// Data CREATE function
module.exports.createEmployees = async (req,res) => {
    try{
        // console.log(req.body);
        // console.log(mongo);
       const insertedResponse = await connect.collection("employees").insertone(req.body);
       res.send(insertedResponse);
       
    }catch(err){
        console.error(err);
        res.status(500).send(err);
    }
    
};
// UPDATE function
module.exports.updateEmployees = (req,res,next) => {
    res.send({ status: "updateEmployees successfully" });
};

module.exports.deleteEmployees = (req,res,next) => {
    res.send({ status: "deleteEmployees successfully" });
};