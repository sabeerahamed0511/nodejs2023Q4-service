const router = require("express").Router();
const {getAllUser, getSingleUser, newUser, updateUser, deleteUser} = require("../controllers/userController");

router.get("/", getAllUser);
router.get("/:id", getSingleUser);
router.post("/", newUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;