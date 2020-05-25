const express = require("express");
const viewsController = require("../controllers/views");
const router = express.Router();

router.get('/dashboard', viewsController.isLoggedIn, viewsController.dashboard);
router.get('/', viewsController.login);
router.get('/login', viewsController.login);
router.get('/register-driver', viewsController.isLoggedIn, viewsController.registerDriver);
router.get('/register-recruiter', viewsController.isLoggedIn, viewsController.registerRecruiter);



module.exports = router;