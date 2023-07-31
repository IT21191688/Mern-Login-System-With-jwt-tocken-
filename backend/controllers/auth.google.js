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

            // Send the token and role back to the frontend
            res.send(`<script>
                     window.opener.postMessage({ token: '${token}', role: '${role}' }, 'http://localhost:3000');
                     window.close();
                    </script>`);
            //res.cookie('token', token);
            //res.cookie('role', role);

            //res.redirect(`http://localhost:3000/userHome?token=${token}&role=${role}`);



            /*
            
                        if (role === "user") {
                            res.redirect("http://localhost:3000/userHome?token=" + token + "&role=" + role);
                        } else if (role === "admin") {
                            res.redirect("http://localhost:3000/adminHome?token=" + token + "&role=" + role);
                        } else {
                            res.redirect("http://localhost:3000/login");
                        }
            
                        */
            console.log("User Authanticated")
        });

    app.get('/api/is-authenticated', googleAuthenticate, (req, res) => {
        // If the user is authenticated, we can assume the user is logged in.
        // Now, we can create a JWT and send it to the frontend.
        const user = req.user;
        const token = jwt.sign({ userId: user._id }, config.secretKey);
        const role = user.role;

        res.json({ token, role });
    });

}
module.exports = {
    routsInit
};
