const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    _id : {
        type : String,
    },
    name : {
        type : String,
        unique : true,
        required : true
    },
    year : {
        type : Number,
        required : true
    },
    artistId : {
        type : String,
        required : true
    }
});

const Album = new mongoose.model("albums", albumSchema);
module.exports = Album;