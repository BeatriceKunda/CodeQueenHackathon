const express = require("express");
const router = express.Router();
const driverController = require("../controllers/drivers");
const authProtector = require("../auth/authProtector");

// DRIVERS REST API Architecture for the ROUTING PATHS
// 1. Get All drivers in our database                         =>  '/driver' - GET
// 2. Register a new driver                                   =>  '/driver' - POST
// 3. Get the details of a particular driver                  =>  '/driver/:id' - GET
// 4. Update the details of a particular driver               =>  '/driver/:id' - PATCH/PUT
// 5. Delete a particular driver from the database            =>  '/driver/:id' - DELETE

router.use(authProtector()); // every route  below this needs someone to be logged in

router.get("/", driverController.getAllDrivers);

router.post("/", driverController.addNewDriver);

router.get("/:id", driverController.getSpecificDriver);

router.patch("/:id", driverController.editDriverDetails);

router.delete("/:id", driverController.deleteDriver);

module.exports = router;