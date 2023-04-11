const Album = require("../models/albumSchema");
const Track = require("../models/trackSchema");
const Favorite = require("../models/favoritesSchema");
const uuid = require("uuid");
const { defaultId } = require("./favoritesController");

const getAllAlbum = async (req, res) => {
    try {
        let albums = await Album.find();
        res.status(200).json({ status: "Success", albums });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const getSingleAlbum = async (req, res) => {
    try {
        let album = await Album.findById(req.params.id);
        if (!album) return res.status(404).json({ status: "Failure", message: "Album doesn't exists" });
        res.status(200).json({ status: "Success", album });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const newAlbum = async (req, res) => {
    try {
        let album = await new Album({
            ...req.body,
            _id: uuid.v4()
        });
        album = await album.save();
        res.status(201).json({ status: "Success", message: "New album created." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const updateAlbum = async (req, res) => {
    try {
        let album = await Album.findById(req.params.id);
        if (!album) return res.status(404).json({ status: "Failure", message: "Album doesn't exists" });
        await Album.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ status: "Success", message: "Album updated." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const deleteAlbum = async (req, res) => {
    try {
        let album = await Album.findById(req.params.id);
        if (!album) return res.status(404).json({ status: "Failure", message: "Album doesn't exists" });
        await Track.updateMany({albumId : req.params.id}, {albumId : null});
        await Favorite.findByIdAndUpdate(defaultId, {$pull : {albums : req.params.id}});
        await Album.findByIdAndDelete(req.params.id);
        res.status(204).json({ status: "Success", message: "Album deleted." });

    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

module.exports = { getAllAlbum, getSingleAlbum, newAlbum, updateAlbum, deleteAlbum };