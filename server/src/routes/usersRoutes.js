const router = require("express").Router();
// const multer = require("multer");
// const multerConfig = require("../config/multer");
const usersControllers = require("../controllers/usersControllers")


router.post("/", usersControllers.createUser);

router.get("/:id", usersControllers.getUser);

router.delete("/:id", usersControllers.deleteUser);

router.put("/:id", usersControllers.updateUser)

router.get("/", usersControllers.getAllUser)

module.exports = router;

