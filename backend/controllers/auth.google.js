const session = require('express-session');
const config = require('../config');
const jwt = require('jsonwebtoken');

const { googleAuthenticate } = require('../middleware/auth.middleware');
const { authenticate } = require('passport');

const routsInit = async (app, passport) => {
    app.get('/auth/google',
        passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get('/auth/google/callback', passport.authenticate('google', {
        failureRedirect: '/login'
    }),
        function (req, res) {

            const user = req.user
            // Generate a JWT token
            const token = jwt.sign({ userId: user._id }, config.secretKey);
            const role = user.role

            console.log(token, role)

            //res.json({ token, role });

            res.cookie('token', token);
            res.cookie('role', role);


            //res.redirect(`http://localhost:3000/userHome?token=${token}&role=${role}`);
            res.redirect("http://localhost:3000/login");

            console.log("User Authanticated")
        });

}
module.exports = {
    routsInit
};
