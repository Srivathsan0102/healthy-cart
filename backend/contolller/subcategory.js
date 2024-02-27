const SubCategoryModel = require("../models/subcategorySchema");

module.exports.getSubCategoryData = async(req,res)=>{
    const SubCategoryData = await SubCategoryModel.find()
    res.send(SubCategoryData)
}

module.exports.saveSubCategoryData  =async(req,res)=>{
    
    const {subcategory} = req.body
    console.log("category",subcategory);
    SubCategoryModel.create(subcategory).then((data)=>{
        res.status(201).send(data);
        console.log(data);

    }).catch((err)=>{
        console.log(err)
        res.send("not saved")
    })
}


module.exports.deleteSubCategoryData = (req, res) => {
    const { id } = req.params;
    console.log(id);
    SubCategoryModel.findByIdAndDelete(id)
        .then((data) => {
            console.log("Deleted");
            res.status(201).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send("Not Deleted");
        })
}


module.exports.updatesubcategory = (req, res) => {
    const { id } = req.params;
    // const { product } = req.body;
    // console.log(product);
    const { subCategoryName } = req.body;
    // console.log(category_name, Name);
    SubCategoryModel.findByIdAndUpdate(id, {subCategoryName }, { new: true })
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


module.exports.getSubCategoryName = async (req, res) => {
    const { subcategoryName } = req.params;
    console.log(subcategoryName);
    try {
        const tasks = await SubCategoryModel.find({ category: subcategoryName });
        res.send(tasks);
        console.log(tasks,"yjis")
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
