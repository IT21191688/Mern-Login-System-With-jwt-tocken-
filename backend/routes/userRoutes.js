const express = require('express');
const { register, login, getDetails, updateUser, deleteUser } = require('../controllers/auth.controllers');

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.post('/profile', getDetails);

router.put('/updateUser', updateUser);

router.post('/deleteUser', deleteUser);


module.exports = router;