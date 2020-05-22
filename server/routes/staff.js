const express = require("express");
const router = express.Router();
const staffControllers = require("../controllers/staff");
const staffAuthControllers = require("../controllers/staffAuth");
const authProtector = require("../auth/authProtector");

router.post("/login", staffAuthControllers.login);

// TODO: Protect these routes so that only an Admin can do this

router.use(authProtector()); // every route  below this needs someone to be logged in

router.get("/logout", staffAuthControllers.logout);
router.get("/logoutAll", staffAuthControllers.logoutAll);

router.get("/", staffControllers.getAllStaff);

router.post("/", staffControllers.createNewStaffMember);

router.get("/:id", staffControllers.getSpecificStaffDetails);

router.patch("/:id", staffControllers.updateStaffMemberDetails);

router.delete("/:id", staffControllers.deleteStaffMember);

module.exports = router;