//create varables and import pacages
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//import .env
require("dotenv").config();

//initialize port number
const PORT = process.env.PORT || 8080;

//use dependancies
app.use(cors());
//get json using bodyparser
app.use(bodyParser.json());

//connect mongo db options
const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB!!!');

    app.listen(PORT, () => {
        console.log(`Server is up and running on port ${PORT}`);
    });
}).catch((error) => {
    console.log("Error Connecting MongoDb", error);
});




const db = mongoose.connection;


const authRoutes = require('./routes/userRoutes')
app.use('/auth', authRoutes);




