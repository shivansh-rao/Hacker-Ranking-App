var passport = require('passport');
var jwt = require('jsonwebtoken');
var User = require('./../model/User.js');

/*Login Logic Code*/
module.exports.login = ("/login", function (req, res) {

    passport.authenticate('local', { session: false }, function (err, user, info) {
        if (err || !user) {
            
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user: user
            });
        }
        console.log(user)
        if(req.body.admin===true && !user.admin){
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
            });
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            const token = jwt.sign(user.toJSON(), 'your_jwt_secret');
            return res.json({ user, token });
        });
    })
        (req, res);
}
);

/*Register Logic Code*/
module.exports.register = ("/register", function (req, res) {
    var newUser = new User({ username: req.body.username, email: req.body.email, phone: req.body.ph });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {

            res.json(err);
        }
        else {

            res.json({ user: null });
        }
    });
});

/*Logout Logic Code*/
module.exports.logout=("/logout", function (req, res) {
    req.logout();
    res.json("logged out");
});


