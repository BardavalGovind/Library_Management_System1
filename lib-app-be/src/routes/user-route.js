const express = require('express');
const router = express.Router();
const userController = require("../controllers/user-controller");
const { authMiddleware } = require('../middleware/auth-middleware');

router.post("/signup", userController.addNewUser);
router.post("/login", userController.loginUser);
router.get("/logout", authMiddleware, userController.logoutUser);

module.exports = router;