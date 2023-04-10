const router = require("express").Router();
const { getAllTrack, getSingleTrack, newTrack, updateTrack, deleteTrack } = require("../controllers/trackController");

router.get("/", getAllTrack);
router.get("/:id", getSingleTrack);
router.post("/", newTrack);
router.put("/:id", updateTrack);
router.delete("/:id", deleteTrack);

module.exports = router;