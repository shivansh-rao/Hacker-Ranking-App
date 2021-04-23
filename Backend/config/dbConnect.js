var mongoose = require('mongoose');
var UserDashboard=require('../model/userDashboard')

/*config file to make mongo db connection to mongo database
    use username and password of your mongo database cloud service
*/
mongoose.connect("mongodb+srv://shivansh:shivansh@cluster0-fpqlm.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log("database connected")
});
