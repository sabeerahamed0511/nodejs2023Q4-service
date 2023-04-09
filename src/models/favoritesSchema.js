const mongoose = require("mongoose");

const favoritesSchema = new mongoose.Schema({
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