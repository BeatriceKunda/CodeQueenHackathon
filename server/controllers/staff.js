const Staff = require("../models/staff");

const getAllStaff = async (req, res) => {
    const staff = await Staff.find({});
    res.status(200).json({ message: "success", staff });
}

const createNewStaffMember = async (req, res) => {
    try {
        const staff = await Staff.create(req.body);
        res.status(201).json({ message: "success", staff });
    } catch (error) {
        // console.log(error);
        res.status(400).json({ error: error.message });
    }
}

const getSpecificStaffDetails = async (req, res) => {
    try {
        const staff = await Staff.findById(req.params.id);
        res.status(200).json({ message: "success", staff });
    }
    catch (error) {
        // console.log(error);
        res.status(404).json({ message: "No Staff Member Found with That ID" })
    }
}

const updateStaffMemberDetails = async (req, res) => {
    try {
        const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "successfully updated staff", staff });
    } catch (error) {
        // console.log(error);
        res.status(404).json({ message: "Could not update that ID as it is not Found" });
    }
}

const deleteStaffMember = async (req, res) => {
    try {
        const staff = await Staff.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "successfully removed staff from database" });
    } catch (error) {
        // console.log(error);
        res.status(404).json({ message: "No staff found with that ID" })
    }
}

module.exports = {
    getAllStaff,
    createNewStaffMember,
    getSpecificStaffDetails,
    updateStaffMemberDetails,
    deleteStaffMember
}