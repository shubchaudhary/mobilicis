const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

router.get("/", userController.getAllUsers);

router.get("/load-data", userController.loadUsers);

router.get("/query1", userController.query1);
router.get("/query2", userController.query2);
router.get("/query3", userController.query3);
router.get("/query4", userController.query4);
router.get("/query5", userController.query5);

module.exports = router;
