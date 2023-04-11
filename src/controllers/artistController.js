const Artist = require("../models/artistSchema");
const Album = require("../models/albumSchema");
const Track = require("../models/trackSchema");
const Favorite = require("../models/favoritesSchema");
const uuid = require("uuid");
const { defaultId } = require("./favoritesController");


const getAllArtist = async (req, res) => {
    try {
        let artists = await Artist.find();
        res.status(200).json({ status: "Success", artists });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const getSingleArtist = async (req, res) => {
    try {
        let artist = await Artist.findById(req.params.id);
        if (!artist) return res.status(404).json({ status: "Failure", message: "Artist doesn't exists" });
        res.status(200).json({ status: "Success", artist });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const newArtist = async (req, res) => {
    try {
        let artist = await new Artist({
            ...req.body,
            _id: uuid.v4()
        });
        artist = await artist.save();
        res.status(201).json({ status: "Success", message: "New artist created." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const updateArtist = async (req, res) => {
    try {
        let artist = await Artist.findById(req.params.id);
        if (!artist) return res.status(404).json({ status: "Failure", message: "artist doesn't exists" });
        await Artist.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ status: "Success", message: "Artist updated." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const deleteArtist = async (req, res) => {
    try {
        let artist = await Artist.findById(req.params.id);
        if (!artist) return res.status(404).json({ status: "Failure", message: "Artist doesn't exists" });
        await Album.updateMany({artistId : req.params.id}, {artistId : null});
        await Track.updateMany({artistId : req.params.id}, {artistId : null});
        await Favorite.findByIdAndUpdate(defaultId, {$pull : {artists : req.params.id}});
        await Artist.findByIdAndDelete(req.params.id);
        res.status(204).json({ status: "Success", message: "Artist deleted." });

    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

module.exports = { getAllArtist, getSingleArtist, newArtist, updateArtist, deleteArtist };