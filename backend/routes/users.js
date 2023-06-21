//import router pacage
const router = require("express").Router();
const { request } = require("express");

//import nodemailer
const nodemailer = require('nodemailer');


let User = require("../models/user.js");
//import models User js

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require("path");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Appoinment_slip');
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}




let upload = multer({ storage: storage });



//Create a transporter object
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'sadeeeparuwanpura',
        pass: 'pvylzomsuhntvrdn'
    }
});



//add data 
router.route("/addUser").post(upload.single("file_path"), (req, res) => {

    res.send(req.file);

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const age = req.body.age;
    const dob = req.body.dob;
    const password = req.body.password


    const newUser = new User({
        firstname,
        lastname,
        email,
        age,
        dob,
        password

    });




    const mailOptions = {
        from: 'sadeeeparuwanpura@gmail.com',
        to: email,
        subject: 'Thank You for Contacting Us',
        text: `Dear ${firstname},\n\nThank you for contacting us. I have received your message and will get back to you shortly.\n\nBest regards,\nSadeepa\n(This is a system generated Email don't reply this)`
    };




    //then() js promice
    newUser.save().then(function () {

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });


        //give response json format
        res.json("Employee added success");




    }).catch(function (err) {

        console.log(err);

    })



})


//read data
router.route("/readlabAppoinment").get(function (req, res) {

    labAppoinment.find().then((labAppoinments) => {

        res.json(labAppoinments);

    }).catch(function (err) {

        console.log(err);

    })
})






//export module
module.exports = router;