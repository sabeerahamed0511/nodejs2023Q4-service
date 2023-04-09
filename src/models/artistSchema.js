const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    _id : {
        type : String,
        default : uuid.v4()
    },
    name : {
        type : String,
        unique : true
    },
    grammy : {
        type : Boolean,
    }
});

const Artist = new mongoose.model("artists", artistSchema);
module.exports = Artist;