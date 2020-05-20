const express = require("express");
const router = express.Router();

// TODO: Protect these routes so that only an Admin can do this
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