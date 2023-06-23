const express = require('express');
const { register, login, getDetails, updateUser, deleteUser, checkOldPassword } = require('../controllers/auth.controllers');

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.post('/profile', getDetails);

router.put('/updateUser', updateUser);

router.post('/deleteUser', deleteUser);

router.post('/resetPassword', checkOldPassword);


module.exports = router;