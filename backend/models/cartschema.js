const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    ProductName:String,
    _id:Number,
    Price:Number,
    Quantity:Number,
    img:String
})

module.exports = mongoose.model("Cart",CartSchema)  