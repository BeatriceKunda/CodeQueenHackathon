const express = require("express");
const router = express.Router();
const staffControllers = require("../controllers/staff");

// TODO: Protect these routes so that only an Admin can do this
router.get("/", staffControllers.getAllStaff);

router.post("/", staffControllers.createNewStaffMember);

router.get("/:id", staffControllers.getSpecificStaffDetails);

router.patch("/:id", staffControllers.updateStaffMemberDetails);

router.delete("/:id", staffControllers.deleteStaffMember);

module.exports = router;