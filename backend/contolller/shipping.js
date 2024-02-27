const mongoose =require('mongoose');
const ShippingModel = require('../models/shipschema')

module.exports.getship = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
      const tasks = await ShippingModel.find({ 'contact_details.email': id })
        .sort({ _id: -1 })
        .limit(1); 
      
      res.send(tasks);
      console.log(tasks);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  };
  

//create ship data
module.exports.saveship = (req,res)=>{
    const {task} = req.body;
    ShippingModel.create(task).then((data)=>{
        console.log("Saved");
        res.status(201).send(data)
    }).catch((err)=>{
        console.log(err);
        res.send("not saved")
    })
};

//Delete ship data
module.exports.deleteship = async (req, res) => {
    try {
        const id = "6461a89d16720be0e4d034d5";
        const deletedTask = await ShippingModel.findByIdAndDelete(id);
        console.log("deleted");
        res.status(201).send(deletedTask);
    } catch (error) {
        console.log(error);
        res.send("not deleted");
    }
};

// module.exports.checkship = async (req, res) => {
//     try {
//         const {id} = req.params 
//         const deletedTask = await ShippingModel.findOne({contact_details : id})
//         console.log("deleted");
//         res.status(201).send(deletedTask);
//     } catch (error) {
//         console.log(error);
//         res.send("not deleted");
//     }
// };



//update ship Data
module.exports.updateship = (req, res) => {
    ShippingModel.findByIdAndUpdate({ _id: "6461d388960be7e10c78ed9d" }, { contact_no:"9876543212"}, { new: true })
        .then((data) => {
            console.log("updated");
            console.log(data);
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Failed to update profile");
        });
};