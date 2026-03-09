const express = require("express");
const router = express.Router();

// IMPORT CONTROLLER
const userController = require("../controllers/user");

// R O U T E S
router.post("/user",userController.createUser);
router.get("/user",userController.findUserByID);
router.get("/user",userController.getAllUsers);
router.delete("/user/:id",userController.deleteUser);
router.put("/user/:id",userController.updateUser);

module.exports = router;