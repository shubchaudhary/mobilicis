require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/user-routes");

app.use(express.json());
app.use("/users", router);
app.get("/", (req, res) => {
    res.send("Hello World");
});

const uri = process.env.MONGODB_URI;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB Atlas");
    })
    .catch((err) => console.log("Error connecting to MongoDB Atlas:", err));

const port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log("Server listening on port " + port);
});
