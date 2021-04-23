var mongoose=require("mongoose");
var passportLocalMongoose=require('passport-local-mongoose');

/*User schema*/

var UserSchema=new mongoose.Schema({
	email: String,
	username: String,
	password: String,
	phone: Number,
	admin:{type:Boolean,default:false}

});
UserSchema.plugin(passportLocalMongoose);

module.exports =mongoose.model("User",UserSchema);