const router = require("express").Router();
const { getAllFav, newFavTrack, deleteFavTrack, 
    newFavAlbum, deleteFavAlbum, newFavArtist, 
    deleteFavArtist, isFav } = require("../controllers/favoritesController");

router.get("/", getAllFav);

router.post("/track/:id", isFav, newFavTrack);
router.delete("/track/:id", deleteFavTrack);

router.post("/album/:id", isFav, newFavAlbum);
router.delete("/album/:id", deleteFavAlbum);

router.post("/artist/:id",isFav, newFavArtist);
router.delete("/artist/:id", deleteFavArtist);

module.exports = router;