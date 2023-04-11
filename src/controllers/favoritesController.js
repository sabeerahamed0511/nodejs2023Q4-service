const Favorite = require("../models/favoritesSchema");
const defaultId = "favorites";

const getAllFav = async (req, res) => {
    try {
        let favs = await Favorite.findById(defaultId);
        res.status(200).json({ status: "Success", favs });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const newFavTrack = async (req, res) => {
    try {
        await Favorite.findByIdAndUpdate(defaultId, {$push : {tracks : req.params.id}});
        res.status(201).json({ status: "Success", message: "New track added to favs." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const deleteFavTrack = async (req, res) => {
    try {
        let fav = await Favorite.findById(defaultId);
        if (!fav || fav.tracks.indexOf(req.params.id) === -1) return res.status(404).json({ status: "Failure", message: "track doesn't exists in favvorites" });
        await Favorite.findByIdAndUpdate(defaultId, {$pull : {tracks : req.params.id}});
        res.status(204).json({ status: "Success", message: "one track removed from favs." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const newFavAlbum = async (req, res) => {
    try {
        await Favorite.findByIdAndUpdate(defaultId, {$push : {albums : req.params.id}});
        res.status(201).json({ status: "Success", message: "New album added to favs." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const deleteFavAlbum = async (req, res) => {
    try {
        let fav = await Favorite.findById(defaultId);
        if (!fav || fav.albums.indexOf(req.params.id) === -1) return res.status(404).json({ status: "Failure", message: "Album doesn't exists in favvorites" });
        await Favorite.findByIdAndUpdate(defaultId, {$pull : {albums : req.params.id}});
        res.status(204).json({ status: "Success", message: "one album removed from favs." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const newFavArtist = async (req, res) => {
    try {
        await Favorite.findByIdAndUpdate(defaultId, {$push : {artists : req.params.id}});
        res.status(201).json({ status: "Success", message: "New artist added to favs." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const deleteFavArtist = async (req, res) => {
    try {
        let fav = await Favorite.findById(defaultId);
        if (!fav || fav.artists.indexOf(req.params.id) === -1) return res.status(404).json({ status: "Failure", message: "Artist doesn't exists in favvorites" });
        await Favorite.findByIdAndUpdate(defaultId, {$pull : {artists : req.params.id}});
        res.status(204).json({ status: "Success", message: "one artist removed from favs." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const isFav = async (req, res, next) => {
    try {
        let fav = await Favorite.findById(defaultId);
        if(!fav) {
            fav = await new Favorite({
                _id: defaultId,
                artists : [],
                albums : [],
                tracks : []
            });
            await fav.save();
        }
        const entity = req.path.split("/")[1]; //sabeer
        if(fav[entity+"s"].indexOf(req.params.id) !== -1) {
            return res.status(200).json({ status : "Success", message : `${entity} already exist in favs.`})
        }
        next();
    } catch (err) {
        return res.status(400).json({ status: "Failure", message: err.message });
    }
}

module.exports = { getAllFav, newFavTrack, deleteFavTrack, newFavAlbum, newFavArtist, deleteFavAlbum, deleteFavArtist, isFav, defaultId};