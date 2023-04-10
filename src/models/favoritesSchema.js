const mongoose = require("mongoose");

const favoritesSchema = new mongoose.Schema({
    _id : {
        type : String
    },
    artists : {
        type : [String],
    },
    albums : {
        type : [String],
    },
    tracks : {
        type : [String]
    }
});

const Favorite = new mongoose.model("favorites", favoritesSchema);
module.exports = Favorite;