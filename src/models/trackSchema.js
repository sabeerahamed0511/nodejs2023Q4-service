const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
    _id : {
        type : String,
    },
    name : {
        type : String,
        unique : true,
        required : true
    },
    artistId : {
        type : String,
    },
    albumId : {
        type : String,
    },
    duration : {
        type : Number,
        required : true
    }
});

const Track = new mongoose.model("tracks", trackSchema);
module.exports = Track;