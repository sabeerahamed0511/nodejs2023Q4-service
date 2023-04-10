const router = require("express").Router();
const { getAllAlbum, getSingleAlbum, newAlbum, updateAlbum, deleteAlbum } = require("../controllers/albumController");

router.get("/", getAllAlbum);
router.get("/:id", getSingleAlbum);
router.post("/", newAlbum);
router.put("/:id", updateAlbum);
router.delete("/:id", deleteAlbum);

module.exports = router;