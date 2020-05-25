const express = require("express");
const viewsController = require("../controllers/views");
const router = express.Router();

router.get('/dashboard', viewsController.dashboard);
router.get('/login', viewsController.login);
router.get('/register-driver', viewsController.registerDriver);



module.exports = router;