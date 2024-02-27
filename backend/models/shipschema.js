const mongoose = require('mongoose');

const shippingSchema =new mongoose.Schema({
    contact_details:{
        contact_no:String,
        email:String,
        address:String,
        city:String,
        state:String,
        country:String,
        pincode:String
    },
    name:{
        fname:String,
        lname:String
    }
});

module.exports = mongoose.model('shippingmodels',shippingSchema);