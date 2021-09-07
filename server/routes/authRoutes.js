const Router = require("express");
const router = new Router();
const authController = require("./../controllers/authController");

router.post("/registration", authController.createAccount);
router.post("/login", authController.activate);

module.exports = router;
