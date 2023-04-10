const Favorite = require("../models/favoritesSchema");
const uniqueId = "favorites";

const getAllFav = async (req, res) => {
    try {
        let favs = await Favorite.findById(uniqueId);
        res.status(200).json({ status: "Success", favs });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const newFavTrack = async (req, res) => {
    try {
        let fav = await Favorite.findById(uniqueId);
        if(!fav) {
            fav = await new Favorite({
                _id: uniqueId,
                artists : [],
                albums : [],
                tracks : []
            });
            await fav.save();
        }
        if(fav.tracks.indexOf(req.params.id) !== -1) {
            return res.status(200).json({ status : "Success", message : "Track already exist in favs."})
        }
        await Favorite.findByIdAndUpdate(uniqueId, {$push : {tracks : req.params.id}});
        res.status(201).json({ status: "Success", message: "New track added to favs." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const deleteFavTrack = async (req, res) => {
    try {
        let fav = await Favorite.findById(uniqueId);
        if (fav || fav.tracks.indexOf(req.params.id) === -1) return res.status(404).json({ status: "Failure", message: "track doesn't exists in favvorites" });
        await Favorite.findByIdAndUpdate(uniqueId, {$pull : {tracks : req.params.id}});
        res.status(204).json({ status: "Success", message: "one track removed from favs." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const newFavAlbum = async (req, res) => {
    try {
        let fav = await Favorite.findById(uniqueId);
        if(!fav) {
            fav = await new Favorite({
                _id: uniqueId,
                artists : [],
                albums : [],
                tracks : []
            });
            await fav.save();
        }
        if(fav.albums.indexOf(req.params.id) !== -1) {
            return res.status(200).json({ status : "Success", message : "Album already exist in favs."})
        }
        await Favorite.findByIdAndUpdate(uniqueId, {$push : {albums : req.params.id}});
        res.status(201).json({ status: "Success", message: "New album added to favs." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const deleteFavAlbum = async (req, res) => {
    try {
        let fav = await Favorite.findById(uniqueId);
        if (fav || fav.albums.indexOf(req.params.id) === -1) return res.status(404).json({ status: "Failure", message: "Album doesn't exists in favvorites" });
        await Favorite.findByIdAndUpdate(uniqueId, {$pull : {albums : req.params.id}});
        res.status(204).json({ status: "Success", message: "one album removed from favs." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const newFavArtist = async (req, res) => {
    try {
        let fav = await Favorite.findById(uniqueId);
        if(!fav) {
            fav = await new Favorite({
                _id: uniqueId,
                artists : [],
                albums : [],
                tracks : []
            });
            await fav.save();
        }
        if(fav.artists.indexOf(req.params.id) !== -1) {
            return res.status(200).json({ status : "Success", message : "Artist already exist in favs."})
        }
        await Favorite.findByIdAndUpdate(uniqueId, {$push : {artists : req.params.id}});
        res.status(201).json({ status: "Success", message: "New artist added to favs." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const deleteFavArtist = async (req, res) => {
    try {
        let fav = await Favorite.findById(uniqueId);
        if (fav || fav.artists.indexOf(req.params.id) === -1) return res.status(404).json({ status: "Failure", message: "Artist doesn't exists in favvorites" });
        await Favorite.findByIdAndUpdate(uniqueId, {$pull : {artists : req.params.id}});
        res.status(204).json({ status: "Success", message: "one artist removed from favs." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

module.exports = { getAllFav, newFavTrack, deleteFavTrack, newFavAlbum, newFavArtist, deleteFavAlbum, deleteFavArtist};