const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    ProductId:{
        type: Number,
        required: true
    },
    _id:{
        type:Number,
        default:function(){
            return this.ProductId
        }
    },
    Category: String,
    ProductName:String,
    Status:String,
    Price:Number,
    img:String,
    Additional_description:String
})

module.exports = mongoose.model("product", productSchema);