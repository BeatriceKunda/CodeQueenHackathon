const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


// ------- ROUTES -------
app.get("/", (req, res) => res.status(200).json({ message: "Welcome to the CodeQueen Hackathon API" }));


// ------ LISTENING  ------
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
