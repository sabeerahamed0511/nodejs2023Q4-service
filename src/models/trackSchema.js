const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
    _id : {
        type : String,
        default : uuid.v4()
    },
    name : {
        type : String,
        unique : true
    },
    artistId : {
        type : String,
        default : null
    },
    albumId : {
        type : String,
        default : null
    },
    duration : {
        type : Number,
        required : true
    }
});

const Track = new mongoose.model("tracks", trackSchema);
module.exports = Track;