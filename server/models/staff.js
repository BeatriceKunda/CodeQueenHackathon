const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcrypt");

const Staff = new Schema({
    firstName: { type: String, required: [true, "Please provide a first name"] },
    lastName: { type: String, required: [true, "Please provide a last Name"] },
    username: { type: String, required: [true, "Please provide a username"], unique: true, lowercase: true },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 8,
        select: false // add this if you do not want any DB query to come with the password showing up
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confirm your password"],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: "Passwords Do not match!"
        }
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid Email"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Please a phone Number"],
        unique: true,
        trim: true,
        validate: {
            validator: function (num) {
                return validator.isMobilePhone(num, "en-UG"); // Restrict to UG numbers
            },
            message: "Please provide a valid Ugandan Mobile Number"
        }
    },
    drivers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Driver" }],
    role: { type: String, enum: ['admin', 'recruiter'], default: 'recruiter' }
});

Staff.pre("save", async function (next) {
    // hash the pasword with a cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    // no need to keep the passwordConfirm field after encrypting the password
    this.passwordConfirm = undefined;

    // this ensures that you the call next function in the middleware stack
    next();
});

Staff.methods.isPasswordCorrect = async function (paspasswordToCheck, savedPassword) {
    return await bcrypt.compare(paspasswordToCheck,  savedPassword);
};


module.exports = mongoose.model("staff", Staff);
