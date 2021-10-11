const router = require("express").Router();
// const multer = require("multer");
// const multerConfig = require("../config/multer");
const usersControllers = require("../controllers/usersControllers")


router.post("/", usersControllers.createUser);

router.get("/email", usersControllers.getUser);

router.delete("/email", usersControllers.deleteUser);

router.put("/email", usersControllers.updateUser)

router.get("/", usersControllers.getAllUser)

module.exports = router;

