const RegistrationModel = require('../models/registrationSchema')

module.exports.getSignupData = async(req,res)=>{
    console.log("get");
    const signupData = await RegistrationModel.find();
    res.send(signupData);
}   
module.exports.saveSignupData = async (req,res)=>{
    const {task} = req.body; 
   
    // const userdata =[ {
    //     fname: "Srivathsan",
    //     lname: "p",
    //     email: "srivathsan@gmail.com",
    //     dob:"02/01/2001"
    // },{
    //     fname: "siva",
    //     lname: "p",
    //     email: "siva@gmail.com",
    //     dob:"02/01/2002"
    // }]
    RegistrationModel.create(task).then((data)=>{
        console.log("save");
        console.log("post"+task);
        res.status(201).send(data);
    }).catch((err)=>{
        console.log(err);
        res.send("not saves")
    })
}
module.exports.deleteUserData =(req,res)=>{
    RegistrationModel.findByIdAndDelete("siva@gmail.com").then((data)=>{
        res.status(201).send(data);
    }).catch((err)=>{
        console.log(err);
        res.send("Not deleted")
    })
} 