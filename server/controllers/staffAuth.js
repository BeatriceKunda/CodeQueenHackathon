const Staff = require("../models/staff");

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: "please provide both email and password!" })
    }

    const staff = await Staff.findOne({ email }).select('+password');

    // compare and see if the passwords match
    if (!staff || !(await staff.isPasswordCorrect(password, staff.password))) {
        return res.status(401).json({ message: "Incorrect Email or Password!" })
    }

    // issue a token (JWT)
    const token = await staff.generateAuthToken();
    staff.password = undefined; // take the password out of the return staff object
    res.status(200).json({ message: "Successful Login", token, staff });
}

const logout = async (req, res) => {
    try {
        // remove the token from the collection of the user's tokens
        req.staff.tokens = req.staff.tokens.filter((token) => {
            return token.token != req.token;
        })
        await req.staff.save({ validateBeforeSave: false });
        res.status(200).send({ message: "logout success" });
    } catch (error) {
        res.status(500).send(error);
    }
}


const logoutAll = async (req, res) => {
    // Log staff out of all devices
    try {
        req.staff.tokens.splice(0, req.staff.tokens.length);
        await req.staff.save({ validateBeforeSave: false })
        res.status(200).send({ message: "successfully logedout of all devices" });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    login,
    logout,
    logoutAll
}