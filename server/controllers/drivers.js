const Drivers = require("../models/drivers");

const getAllDrivers = async (req, res) => {
    const drivers = await Drivers.find({});
    res.status(200).json({ message: "success", data: drivers });
}

const addNewDriver = async (req, res) => {
    // console.log(req.body);
    try {
        req.body.recruitedBy = req.staff._id; // add the recruitedBy field to the req body
        const driver = await Drivers.create(req.body);
        const staff = req.staff;
        staff.drivers.push(driver._id);
        staff.save({ validateBeforeSave: false });
        res.status(201).json({ message: "success", driver });
    } catch (error) {
        // console.log(error);
        res.status(400).json({ error: error.message });
    }
}

const getSpecificDriver = async (req, res) => {
    try {
        const driver = await Drivers.findById(req.params.id);
        res.status(200).json({ message: "success", driver });
    }
    catch (error) {
        // console.log(error);
        res.status(404).json({ message: "No Driver Found with That ID" })
    }
}

const editDriverDetails = async (req, res) => {
    try {
        const driver = await Drivers.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "successfully updated driver", driver });
    } catch (error) {
        // console.log(error);
        res.status(404).json({ message: "Could not update that ID as it is not Found" });
    }
}

const deleteDriver = async (req, res) => {
    try {
        const driver = await Drivers.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "successfully removed Driver from database" });
    } catch (error) {
        // console.log(error);
        res.status(404).json({ message: "No Driver found with that ID" })
    }
}

module.exports = { getAllDrivers, addNewDriver, getSpecificDriver, editDriverDetails, deleteDriver };