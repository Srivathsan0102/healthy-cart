const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    
    firstName: String,
    lastName: String,
    email: String,
    Password:String,
    gender:String
})


module.exports = mongoose.model("users", signupSchema);