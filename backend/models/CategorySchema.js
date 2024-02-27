const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    
    CategoryId:{
        type: Number,
        required: true
    },
    _id:{
        type:Number,
        default:function(){
            return this.CategoryId
        }
    },
    CategoryName:String,
    SubCategory:String,
    Productname:String,
    
})


module.exports = mongoose.model("category", categorySchema);