const CartModel = require("../models/cartschema");

module.exports.getCartData = async(req,res)=>{
    const CartData = await CartModel.find()
    console.log("cartdata",CartData);
    res.send(CartData)
}
module.exports.saveCartData  =async(req,res)=>{
    const Cart = req.body
    console.log("productdata",Cart);
    
    CartModel.create(Cart).then((data)=>{
        res.status(201).send(data);
        console.log(data);
    }).catch((err)=>{
        console.log(err);
        res.send("not saved")
    })
}
module.exports.checkdata =(req,res)=>{
    const {Cart} =req.body;
    console.log(Cart,"this");
    try{
        CartModel.findOneAndUpdate({ Quantity:Cart.Quantity},
            { new: true }).then((data)=>{
                console.log(data);
                console.log("found");
                res.status(200).send();
            })
       
    }catch(err){
        console.log(err.message)
    }
    
};
module.exports.deleteCartData = (req, res) => {
    const { id } = req.params;
    console.log(id);
    CartModel.findByIdAndDelete(id)
        .then((data) => {
            console.log("Deleted");
            res.status(201).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send("Not Deleted");
        })
}   
module.exports.updatecart = (req, res) => {
    const { id } = req.params;
    console.log(id,"categoryid");
    const { Cart } = req.body;
    console.log(Cart.Quantity,"ppp");
    // console.log(category_name, Name);
    CartModel.findByIdAndUpdate(id,  {Quantity:Cart.Quantity} , { new: true })
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
