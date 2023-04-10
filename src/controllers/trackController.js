const Track = require("../models/trackSchema");
const uuid = require("uuid");

const getAllTrack = async (req, res) => {
    try {
        let tracks = await Track.find();
        res.status(200).json({ status: "Success", tracks });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const getSingleTrack = async (req, res) => {
    try {
        let track = await Track.findById(req.params.id);
        if (!track) return res.status(404).json({ status: "Failure", message: "Track doesn't exists" });
        res.status(200).json({ status: "Success", track });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const newTrack = async (req, res) => {
    try {
        let track = await new Track({
            ...req.body,
            _id: uuid.v4()
        });
        track = await track.save();
        res.status(201).json({ status: "Success", message: "New track created." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const updateTrack = async (req, res) => {
    try {
        let track = await Track.findById(req.params.id);
        if (!track) return res.status(404).json({ status: "Failure", message: "Track doesn't exists" });
        await Track.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ status: "Success", message: "Track updated." });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

const deleteTrack = async (req, res) => {
    try {
        let track = await Track.findById(req.params.id);
        if (!track) return res.status(404).json({ status: "Failure", message: "Track doesn't exists" });
        await Track.findByIdAndDelete(req.params.id);
        res.status(204).json({ status: "Success", message: "Track deleted." });

    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

module.exports = { getAllTrack, getSingleTrack, newTrack, updateTrack, deleteTrack };