const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

const register = async (req, res) => {
    const { firstname, lastname, email, age, dob, password, role } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({ firstname, lastname, email, age, dob, password: hashedPassword, role });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare the passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, config.secretKey);
        const role = user.role

        res.json({ token, role });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};


const getDetails = async (req, res) => {
    const { userId } = req.body;

    //console.log(userId)

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { firstname, lastname, email, age, dob, role } = user;

        res.json({ firstname, lastname, email, age, dob, role });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};


const updateUser = async (req, res) => {
    const { userId, firstname, lastname, age, dob } = req.body;

    try {

        const result = await User.findByIdAndUpdate(userId, { "firstname": firstname, "lastname": lastname, "age": age, "dob": dob });

        /*console.log(result)*/
        if (result) {
            return res.status(200).json({ message: 'User updated successfully', success: true });
        }

        res.status(201).json({ message: 'User updated successfully', success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong', success: false });
    }
};


const deleteUser = async (req, res) => {
    const { userId } = req.body;

    // console.log(userId)

    try {

        const result = await User.findByIdAndDelete(userId);

        /*console.log(result)*/
        if (result) {
            return res.status(200).json({ message: 'User Delete successfully', success: true });
        }

        res.status(201).json({ message: 'User Delete successfully', success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong', success: false });
    }
};








module.exports = {
    register,
    login,
    getDetails,
    updateUser,
    deleteUser
};