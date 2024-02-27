const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
    
    subCategoryId:Number,
    subCategoryName:String,
    category:String,
})


module.exports = mongoose.model("subcategory",subcategorySchema);