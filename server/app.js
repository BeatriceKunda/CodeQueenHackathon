const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require('cookie-parser');


const driverRouter = require("./routes/drivers")
const staffRouter = require("./routes/staff")
const viewRouter = require("./routes/viewRoutes");

// load all environment variables in the .env file
dotenv.config({ path: './.env' });

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"));

// ----- MIDDLEWARE -----
// serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// ----- DATABASE -----
mongoose
    .connect("mongodb://localhost:27017/sb-driver-recruit", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Succesful 😃✅"));


// ------- ROUTES -------
app.use("/", viewRouter);

// app.get("/", (req, res) => res.status(200).json({ message: "Welcome to the CodeQueen Hackathon API" }));
app.use("/driver", driverRouter);
app.use("/staff", staffRouter);

// ------ LISTENING  ------
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
