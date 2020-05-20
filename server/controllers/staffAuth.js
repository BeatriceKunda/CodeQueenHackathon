const Staff = require("../models/staff");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: "please provide both email and password!" })
    }

    const staff = await Staff.findOne({ email }).select('+password');

    // compare and see if the passwords match
    if (!staff || !(await staff.isPasswordCorrect(password, staff.password))) {
        return res.status(401).json({ message: "Incorrect Email or Password!" })
    }

    // sign a token (JWT)
    const token = jwt.sign(
        { id: staff._id },
        process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
        issuer: process.env.JWT_ISSUER
    });
    staff.password = undefined; // take the password out of the return staff object
    res.status(200).json({ message: "Successful Login", token, staff });
}




module.exports = {
    login
}