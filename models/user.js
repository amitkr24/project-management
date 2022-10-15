const mongoose   = require('mongoose');
// const multer     = require('multer');
// const path       = require('path');
// const AVATAR_PATH = path.join('/uploads/users/avatars');
const userSchema = new mongoose.Schema({
    firstname:{
        type     : String,
        required : true,
    },
    lastname:{
        type     : String,
        required : true,
    },
    email:{
        type     : String,
        required : true,
        unique   :true,

    }, 
    //phone number of the agency, it must be a 10 digit number and unique
    phone: {
        type: Number,
        unique: true,
        required: true,
        maxlength: 10
    },
    address:{
        type : String,
    },avatar:{
        type :String

    },
},{
    timestamps : true
}); 


const User = mongoose.model('user',userSchema);
module.exports = User;