

const getAllDrivers = (req, res) => {
    res.status(200).json({ message: "success" });
}

const addNewDriver = (req, res) => {
    res.status(201).json({ message: "success" });
}

const getSpecificDriver = (req, res) => {
    res.status(200).json({ message: "success" });
}

const editDriverDetails = (req, res) => {
    res.status(200).json({ message: "success" });
}

const deleteDriver = (req, res) => {
    res.status(204).json({ message: "success" });
}

module.exports = { getAllDrivers, addNewDriver, getSpecificDriver, editDriverDetails, deleteDriver };