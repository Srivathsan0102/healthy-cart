const mongoose =require('mongoose');
const AdminModel = require('../models/adminSchema')

//Read admin data
module.exports.getAdmin =async(req,res)=>{
    const tasks = await AdminModel.find();
    res.send(tasks);
    console.log(tasks);
};

//create admin data
module.exports.saveAdmin = (req,res)=>{
    const task = {
        admin_mail:"vats@gmail.com",
        admin_password:"asdf@321"
    };

    const admin = new AdminModel(task);
    admin.save().then((data)=>{
    console.log("Saved");
    console.log(data);
    res.status(201).send(data);}).catch((err)=>{
        console.log(err);
        res.send("not saved")
    })};
module.exports.checkAdmin =(req,res)=>{
    const {task} =req.body;
    console.log((task));
    try{
        AdminModel.findOne({ admin_mail: task.email});
        console.log("found");
        res.status(200).send();
    }catch(err){
        console.log(err.message)
    }
    
};