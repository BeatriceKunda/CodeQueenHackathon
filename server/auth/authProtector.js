const jwt = require('jsonwebtoken')
const Staff = require('../models/staff')

module.exports = () => {
    return async (req, res, next) => {
        let token;
        if (req.headers.authorization) {
            token = req.header('Authorization').replace('Bearer ', '');
        } else {
            return res.status(400).json({ message: "You must provide a token" });
        }


        let data;
        try {
            data = jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            // console.log(error);
            return res.status(401).send({ error });
        }

        try {
            const staff = await Staff.findOne({ _id: data.id, 'tokens.token': token });
            if (!staff) {
                throw new Error();
            }
            req.staff = staff;
            req.token = token;
            next(); // proceed after login
        } catch (error) {
            return res.status(401).send({ error: 'You should be logged in to access this resource' })
        }
    }

}