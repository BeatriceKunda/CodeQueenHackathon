const express = require("express");
const viewsController = require("../controllers/views");
const router = express.Router();

router.get('/dashboard', viewsController.isLoggedIn, viewsController.dashboard);
router.get('/', viewsController.login);
router.get('/login', viewsController.login);
router.get('/register-driver', viewsController.isLoggedIn, viewsController.registerDriver);
router.get('/register-recruiter', viewsController.isLoggedIn, viewsController.registerRecruiter);

router.get('/registered-drivers', viewsController.isLoggedIn, viewsController.registeredDrivers);
router.get('/in-training', viewsController.isLoggedIn, viewsController.driversInTraining);
router.get('/ready-for-activation', viewsController.isLoggedIn, viewsController.driversActivationReady);
router.get('/driver/view/:id', viewsController.isLoggedIn, viewsController.driverDetails);
router.get('/driver/edit/:id', viewsController.isLoggedIn, viewsController.editDriver);



module.exports = router;