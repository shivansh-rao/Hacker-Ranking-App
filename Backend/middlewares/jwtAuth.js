
/*Middleware function to compare existing jwt with req jwt and authorise accordingly*/

module.exports.isLoggedIn = (req, res, next) => {
  if (req.headers['authentication'] != undefined) {
    const token = req.headers['authentication'];
    console.log("jwt", token)
    req.token = token;
    next();
  }
  else
    res.json("not authenticated")
}