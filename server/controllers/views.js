const Staff = require("../models/staff");
const Driver = require("../models/drivers");

const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const login = (req, res) => {
    console.log(req.url);
    res.status(200).render('login');
}


const registerDriver = (req, res) => {
    res.status(200).render('registerDriver');
}

const registerRecruiter = (req, res) => {
    res.status(200).render('registerRecruiter');
}

const dashboard = async (req, res) => {
    const staff = await Staff.find({ role: 'recruiter' });
    res.status(200).render('dashboard', { staff });
}

// Only for rendered pages, no errors!
const isLoggedIn = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // 1) verify token
            const decoded = await promisify(jwt.verify)(
                req.cookies.jwt,
                process.env.JWT_SECRET
            );

            // 2) Check if user still exists
            const staff = await Staff.findById(decoded.id);
            if (!staff) {
                // return next();
                return res.status(200).render('login', { nextUrl: req.url });
            }

            // THERE IS A LOGGED IN USER
            res.locals.user = staff;
            return next();
        } catch (err) {
            return res.status(200).render('login', { nextUrl: req.url });
        }
    }
    return res.status(200).render('login', { nextUrl: req.url });
};


const registeredDrivers = async (req, res) => {
    const drivers = await Driver.find({ onBoardingStage: 'registered' });
    res.status(200).render('registeredDrivers', { drivers });
}

const driversInTraining = async (req, res) => {
    const drivers = await Driver.find({ onBoardingStage: 'inTraining' });
    res.status(200).render('driversInTraining', { drivers });
}

const driversActivationReady = async (req, res) => {
    const drivers = await Driver.find({ onBoardingStage: 'readyForActivation' });
    res.status(200).render('driversActivationReady', { drivers });
}

const driverDetails = async (req, res) => {
    const driver = await Driver.findById(req.params.id);
    res.status(200).render('driverDetails', { driver });
}

const editDriver = async (req, res) => {
    const driver = await Driver.findById(req.params.id);
    res.status(200).render('editDriver', { driver });
}




module.exports = { login, registerDriver, dashboard, isLoggedIn, registerRecruiter, registeredDrivers, driversInTraining, driversActivationReady, driverDetails, editDriver }