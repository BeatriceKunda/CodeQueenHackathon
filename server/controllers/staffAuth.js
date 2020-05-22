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




module.exports = {
    login
}