const fs = require('fs');
const mongoose = require('mongoose');
const Driver = require('../models/drivers');
const Staff = require('../models/staff');


mongoose
    .connect("mongodb://localhost:27017/sb-driver-recruit", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Succesful 😃✅"));

// READ JSON FILES
const drivers = JSON.parse(fs.readFileSync(`${__dirname}/data/drivers.json`, 'utf-8'));
const staff = JSON.parse(fs.readFileSync(`${__dirname}/data/staff.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
    try {
        await Driver.create(drivers);
        await Staff.create(staff, { validateBeforeSave: false });
        console.log('Data successfully loaded!');
    } catch (err) {
        console.log(err);
    }
    process.exit(); // exit the terminal process
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
    try {
        await Driver.deleteMany();
        await Staff.deleteMany();
        console.log('Data successfully deleted!');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}
