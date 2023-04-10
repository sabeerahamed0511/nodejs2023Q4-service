const router = require("express").Router();
const { getAllFav, newFavTrack, deleteFavTrack, newFavAlbum, deleteFavAlbum, newFavArtist, deleteFavArtist } = require("../controllers/favoritesController");

router.get("/", getAllFav);

router.post("/track/:id", newFavTrack);
router.delete("/track/:id", deleteFavTrack);

router.post("/album/:id", newFavAlbum);
router.delete("/album/:id", deleteFavAlbum);

router.post("/artist/:id", newFavArtist);
router.delete("/artist/:id", deleteFavArtist);

module.exports = router;