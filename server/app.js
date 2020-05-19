const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const driverRouter = require("./routes/drivers")
const recruiterRouter = require("./routes/recruiters")

const app = express();
const port = process.env.PORT || 3000;

// ----- MIDDLEWARE -----
app.use(morgan("combined"));


// ----- DATABASE -----
mongoose
    .connect("mongodb://localhost:27017/sb-driver-recruit", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Succesful 😃✅"));


// ------- ROUTES -------
app.get("/", (req, res) => res.status(200).json({ message: "Welcome to the CodeQueen Hackathon API" }));
app.use("/driver", driverRouter);
app.use("/recruiter", recruiterRouter);

// ------ LISTENING  ------
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
