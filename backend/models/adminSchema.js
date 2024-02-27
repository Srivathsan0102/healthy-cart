const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
  admin_mail:String,
    admin_password :String,
    _id: {
        type: String,
        default: function () {
          return this.admin_mail;
        },
    }
})
module.exports = mongoose.model('admin',adminSchema);