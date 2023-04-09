const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    _id : {
        type : String,
        default : uuid.v4()
    },
    name : {
        type : String,
        unique : true
    },
    year : {
        type : Number,
    },
    artistId : {
        type : String,
        default : null
    }
});

const Album = new mongoose.model("albums", albumSchema);
module.exports = Album;