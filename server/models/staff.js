const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Staff = new Schema({
    firstName: { type: String, required: [true, "Please provide a first name"] },
    lastName: { type: String, required: [true, "Please provide a last Name"] },
    username: { type: String, required: [true, "Please provide a username"] },
    password: { type: String, required: [true, "Please provide a password"], minlength: 8 },
    passwordConfirm: { type: String, required: [true, "Please confirm your password"] }, // TODO: Add a  password validator
    email: { type: String, required: [true, "Please provide an email"] }, // TODO: Add email validation
    phoneNumber: { type: String, required: [true, "Please a phone Number"] }, // TODO: Add Number validation
    drivers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Driver" }]
});

module.exports = mongoose.model("staff", Staff);
