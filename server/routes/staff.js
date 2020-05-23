const express = require("express");
const router = express.Router();
const staffControllers = require("../controllers/staff");
const staffAuthControllers = require("../controllers/staffAuth");
const authProtector = require("../auth/authProtector");

// STAFF REST API Architecture for the ROUTING PATHS
// 1. Get All staff in our database                          =>  '/staff' - GET
// 2. Register a new staff member                            =>  '/staff' - POST
// 3. Get the details of a particular staff                  =>  '/staff/:id' - GET
// 4. Update the details of a particular staff               =>  '/staff/:id' - PATCH/PUT
// 5. Delete a particular staff from the database            =>  '/staff/:id' - DELETE


router.post("/login", staffAuthControllers.login);

router.use(authProtector()); // every route  below this needs someone to be logged in

router.get("/logout", staffAuthControllers.logout);
router.get("/logoutAll", staffAuthControllers.logoutAll);

router.get("/", staffAuthControllers.restrictTo('admin'), staffControllers.getAllStaff);
router.post("/", staffAuthControllers.restrictTo('admin'), staffControllers.createNewStaffMember);
router.get("/:id", staffAuthControllers.restrictTo('admin'), staffControllers.getSpecificStaffDetails);
router.patch("/:id", staffAuthControllers.restrictTo('admin'), staffControllers.updateStaffMemberDetails);
router.delete("/:id", staffAuthControllers.restrictTo('admin'), staffControllers.deleteStaffMember);

module.exports = router;