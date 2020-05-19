const express = require("express");
const mongoose = require("mongoose");
const driverRouter = require("./routes/drivers")

const app = express();
const port = process.env.PORT || 3000;

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

// ------ LISTENING  ------
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
