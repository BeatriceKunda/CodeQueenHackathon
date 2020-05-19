const express = require("express");
const router = express.Router();

// DRIVERS REST API Architecture for the ROUTING PATHS
// 1. Get All drivers in our database                         =>  '/driver' - GET
// 2. Register a new driver                                   =>  '/driver' - POST
// 3. Get the details of a particular driver                  =>  '/driver/:id' - GET
// 4. Update the details of a particular                      =>  '/driver/:id' - PATCH/PUT
// 5. Delete a particular driver from the database            =>  '/driver/:id' - DELETE

// TODO: Protect these routes so that only a Recruiter and may be an Admin can do this
router.get("/", (req, res) => {
    res.status(200).json({ message: "success" });
});

router.post("/", (req, res) => {
    res.status(201).json({ message: "success" });
});

router.get("/:id", (req, res) => {
    res.status(200).json({ message: "success" });
});

router.patch("/:id", (req, res) => {
    res.status(200).json({ message: "success" });
});

router.delete("/:id", (req, res) => {
    res.status(204).json({ message: "success" });
});

module.exports = router;