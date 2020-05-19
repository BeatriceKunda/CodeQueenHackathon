const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Driver = new Schema({
    name: { type: String, required: true },
    stage: { type: String, required: true },
    natIdNumber: { type: String, required: true },
    age: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    recruitmentDate: { type: Date, required: true },
    recruitmentAddr: { type: String, required: true },
    referredBy: { type: String, required: true },
    nextOfKin: { type: String, required: true },
    nextOfKinContact: { type: String, required: true },
    photo: String,
    email: String
});

module.exports = mongoose.model("Driver", Driver);
