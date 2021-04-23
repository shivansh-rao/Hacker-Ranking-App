
var jwt = require('jsonwebtoken');
var UserDashboard = require('./../model/userDashboard');

/*Function to make mongoDB query to load all hacker's data from model UserDashboard and sends to user*/

module.exports.hackers = ('/hackers', function (req, res, next) {
  jwt.verify(req.token, 'your_jwt_secret', (err, authUser) => {
    if (err)
      res.json(err)
    else {
      UserDashboard.find().sort({ name: 1 })
        .then(hackersList => res.json(hackersList))
        .catch(err => res.json(err));
    }
  })
});


/*Function to make mongoDB query to load single hacker's data from model using findById method UserDashboard and sends to user*/
module.exports.hackarDetail = ("/hacker/:id", function (req, res) {
  jwt.verify(req.token, 'your_jwt_secret', (err, authUser) => {
    if (err)
      res.json(err)
    else {
      UserDashboard.findById(req.params.id, function (err, userDetail) {
        if (err) {
          res.json(err);
        }
        else {
          res.json(userDetail);
        }
      });
    }
  })
});

/*Function to make mongoDB query to load pall hacker's data from model UserDashboard and sort ant limit it as per user requirement and send to user*/
module.exports.top3hackarDetail = ("/hacker/topHackers", function (req, res) {
  jwt.verify(req.token, 'your_jwt_secret', (err, authUser) => {
    if (err)
      res.json(err)
    else {
      let limit = req.body.limit || 10;
      UserDashboard.find().sort({ overallRank: 1 }).limit(limit)
        .then(top3hackersList => res.json(top3hackersList))
        .catch(err => res.json(err));
    }
  })
})

/*Function to make mongoDB query to load all hacker's data from model UserDashboard whose data are recently updated and sent to user*/
module.exports.recentlyUpdated = ("/hacker/recentlyUpdated", function (req, res) {
  jwt.verify(req.token, 'your_jwt_secret', (err, authUser) => {
    if (err)
      res.json(err)
    else {
      UserDashboard.find().sort({ updatedAt: -1 }).limit(10)
        .then(recentlyUpdatedData => res.json(recentlyUpdatedData))
        .catch(err => res.json(err));
    }
  })
})

/*Function to make mongoDB query to add single hacker's data to model UserDashboard*/
module.exports.addNewHacker = ("/hacker/new", function (req, res) {

  var camps = req.body;
  UserDashboard.create(camps, function (err, newlyCreated) {
    if (err)
      res.json(err);
    else {
      res.json(newlyCreated);
    }
  })
});

