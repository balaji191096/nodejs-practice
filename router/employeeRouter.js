const express = require("express");
const router = express.Router();
const employeeModules = require("../modules/employeeModule");

router.get("/get",employeeModules.getEmployees);

router.put("/update/:id",employeeModules.updateEmployees);

router.post("/create",employeeModules.createEmployees);

router.delete("/delete/:id",employeeModules.deleteEmployees);


module.exports = router;

