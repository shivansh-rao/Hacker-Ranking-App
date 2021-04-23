const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const localStrategy = require('passport-local');
const dbConnection = require('./config/dbConnect')
const ratingSystem = require('./ratingSystem/ratingSystem')
const User = require('./model/User.js');
const authController = require('./controllers/auth')
const hackerController = require('./controllers/userDetails')
const customMiddlewares = require('./middlewares/jwtAuth')
const UserDashboard = require('./model/userDashboard');

passport.use(new localStrategy(User.authenticate()));

/*Middewares*/
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


/*Routes for authentication*/
app.post("/login", authController.login);
app.post("/register", authController.register);
app.get("/logout", authController.logout);

/*Routes to fetch or add data to Userdashboard Model*/
app.get("/hackers", customMiddlewares.isLoggedIn, hackerController.hackers);
app.get("/hacker/:id", customMiddlewares.isLoggedIn, hackerController.hackarDetail);
app.post("/hackers/topHackers",customMiddlewares.isLoggedIn, hackerController.top3hackarDetail)
app.get("/hackers/recentlyUpdated",customMiddlewares.isLoggedIn, hackerController.recentlyUpdated)
app.post("/hacker/new", hackerController.addNewHacker);




app.listen(process.env.PORT || 3001, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });