const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    _id : {
        type : String,
    },
    name : {
        type : String,
        unique : true,
        required : true
    },
    grammy : {
        type : Boolean,
        required : true
    }
});

const Artist = new mongoose.model("artists", artistSchema);
module.exports = Artist;