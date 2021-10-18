var express = require("express");
var router = express.Router();

const userController = require("../controllers").userData;
// const accountController = require("../controllers").userData;

router.get("/api/users", userController.list);
router.post("/api/account", userController.create);

module.exports = router;
