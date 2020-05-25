const Staff = require("../models/staff");

const login = async (req, res) => {
    const { username, password } = req.body; // object destructuring

    if (!username || !password) {
        return res.status(400).send({ message: "please provide both username and password!" })
    }

    const staff = await Staff.findOne({ username }).select('+password');

    // compare and see if the passwords match
    if (!staff || !(await staff.isPasswordCorrect(password, staff.password))) {
        return res.status(401).json({ message: "Incorrect Username or Password!" })
    }

    // issue a token (JWT)
    const token = await staff.generateAuthToken();

    // generate and issue a cookie
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    res.cookie('jwt', token, cookieOptions);

    staff.password = undefined; // take the password out of the return staff object output
    res.status(200).json({ message: "Successful Login", token, staff });
}

const getMe = () => {
    return (req, res, next) => {
        req.params.id = req.staff.id;
        next();
    }
}

const logout = async (req, res) => {
    try {
        // remove the token from the collection of the user's tokens
        req.staff.tokens = req.staff.tokens.filter((token) => {
            return token.token != req.token;
        })
        await req.staff.save({ validateBeforeSave: false });
        // logout cookie by sending a dummy one that expires shortly
        res.cookie('jwt', 'loggedout', {
            expires: new Date(Date.now() + 10 * 1000),
            httpOnly: true
        });
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

// middleware to restrict routes based on the role of the staff member
const restrictTo = (...roles) => {
    return (req, res, next) => {
        try {
            if (roles.includes(req.staff.role)) {
                next(); // you are authorized to perform this action hence call the next middleware
            } else {
                return res.status(403).json({ message: "you are not authorized to perform this action" });
            }
        } catch (error) {
            return res.status(500).json({ message: "could not understand your level of permission. please contact the server maintenance team" });
        }
    }
}

module.exports = {
    login,
    logout,
    logoutAll,
    restrictTo,
    getMe
}