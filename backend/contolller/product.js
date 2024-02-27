const ProductModel = require("../models/productSchema");

module.exports.getProductData = async (req,res)=>{
    const ProductData = await ProductModel.find()
    res.send(ProductData)
}

module.exports.saveProductData  =async(req,res)=>{
    const {product} = req.body
    console.log("productdata",product);
    
    ProductModel.create(product).then((data)=>{
        res.status(201).send(data);
        console.log(data);
    }).catch((err)=>{
        console.log(err);
        res.send("not saved")
    })
}


module.exports.getProductonCategoryData = async (req, res) => {
    const { categoryname } = req.params;
    console.log(categoryname,"jjj");
    try {
        const tasks = await ProductModel.find({ Category: categoryname });
        res.send(tasks);
        console.log(tasks)
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}


module.exports.getProductonid = async (req, res) => {
    const { id } = req.params;
    console.log(id,"jjj");
    try {
        const tasks = await ProductModel.find({ _id: id });
        res.send(tasks);
        console.log(tasks)
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}




// module.exports.deleteProductData = (req,res)=>{
//     const {id}=req.params;
//     console.log(id);
//     ProductModel.findByIdAndDelete(id).then((data)=>{
//         res.status(201).send(data);
//     }).catch((err)=>{
//         console.log(err.message);
//         res.send("not deleted")
//     })
// }
module.exports.deleteProductData = (req, res) => {
    const { id } = req.params;
    console.log(id);
    ProductModel.findByIdAndDelete(id)
        .then((data) => {
            console.log("Deleted");
            res.status(201).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send("Not Deleted");
        })
}   
module.exports.updateProduct = (req, res) => {
    const { id } = req.params;
    // const { product } = req.body;
    // console.log(product);
    const { ProductName } = req.body;
    console.log(ProductName);
    // console.log(category_name, Name);
    ProductModel.findByIdAndUpdate(id, {ProductName }, { new: true })
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
module.exports.checkProduct =(req,res)=>{
    const {task} =req.body;
    console.log((task));
    try{
        ProductModel.findOneAndUpdate({ admin_mail: task.email});
        console.log("found",task);
        res.status(200).send();
    }catch(err){
        console.log(err.message)
    }
    
};