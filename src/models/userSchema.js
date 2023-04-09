const mongoose = require("mongoose");
const uuid = require("uuid");

const userSchema = new mongoose.Schema({
    _id : {
        type : String,
        default : uuid.v4()
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