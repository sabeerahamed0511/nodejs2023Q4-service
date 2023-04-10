const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id : {
        type : String
    },
    login : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
}, {timestamps : true});

const User = new mongoose.model("users", userSchema);
module.exports = User;