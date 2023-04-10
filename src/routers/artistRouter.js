const router = require("express").Router();
const {getAllArtist, getSingleArtist, newArtist, updateArtist, deleteArtist} = require("../controllers/artistController");

router.get("/", getAllArtist);
router.get("/:id", getSingleArtist);
router.post("/", newArtist);
router.put("/:id", updateArtist);
router.delete("/:id", deleteArtist);

module.exports = router;