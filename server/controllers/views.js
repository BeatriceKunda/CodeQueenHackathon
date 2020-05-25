const Staff = require("../models/staff");

const login = (req, res) => {
    res.status(200).render('login');
}


const registerDriver = (req, res) => {
    res.status(200).render('registerDriver');
}

const dashboard = async (req, res) => {
    const staff = await Staff.find({ role: 'recruiter' });
    res.status(200).render('dashboard', { staff });
}

module.exports = { login, registerDriver, dashboard }