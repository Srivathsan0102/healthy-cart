const CategoryModel = require("../models/CategorySchema");

module.exports.getCategoryData = async(req,res)=>{
    const CategoryData = await CategoryModel.find()
    res.send(CategoryData)
}
module.exports.saveCategoryData  =async(req,res)=>{ 
    const {category} = req.body
    console.log("category",category);
    CategoryModel.create(category).then((data)=>{
        res.status(201).send(data);
        console.log(data);

    }).catch((err)=>{
        console.log(err)
        res.send("not saved")
    })
}
module.exports.deleteCategoryData = (req, res) => {
    const { id } = req.params;
    console.log(id);
    CategoryModel.findByIdAndDelete(id)
        .then((data) => {
            console.log("Deleted");
            res.status(201).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send("Not Deleted");
        })
}   
module.exports.updatecategory = (req, res) => {
    const { id } = req.params;
    console.log(id,"categoryid");
    const { CategoryName } = req.body;
    // console.log(category_name, Name);
    CategoryModel.findByIdAndUpdate(id, { CategoryName}, { new: true })
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
