const getAllStaff = (req, res) => {
    res.status(200).json({ message: "success" });
}

const createNewStaffMember = (req, res) => {
    res.status(201).json({ message: "success" });
}

const getSpecificStaffDetails = (req, res) => {
    res.status(200).json({ message: "success" });
}

const updateStaffMemberDetails = (req, res) => {
    res.status(200).json({ message: "success" });
}

const deleteStaffMember = (req, res) => {
    res.status(204).json({ message: "success" });
}

module.exports = { getAllStaff, createNewStaffMember, getSpecificStaffDetails, updateStaffMemberDetails, deleteStaffMember }