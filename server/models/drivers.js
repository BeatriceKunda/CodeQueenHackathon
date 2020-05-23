const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const Driver = new Schema({
    name: { type: String, required: true },
    stage: { type: String, required: true },
    natIdNumber: { type: String, required: true },
    age: { type: Number, required: true },
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
    recruitedOn: { type: Date, required: true, default: Date.now },
    recruitedBy: { type: mongoose.Schema.Types.ObjectId, ref: "staff" },
    recruitmentAddr: { type: String, required: true },
    referredBy: { type: String },
    nextOfKin: { type: String, required: true },
    nextOfKinContact: {
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
    photo: String,
    email: {
        type: String,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid Email"]
    },
    onBoardingStage: {
        type: String,
        enum: ["registered", "inTraining", "readyForActivation"],
        default: "registered"
    }
});

module.exports = mongoose.model("Driver", Driver);
