const router = require("express").Router();
const userController = require("../controllers/userController");

// router.route()
router.route("/users").get(userController.getAll);

module.exports = router;
