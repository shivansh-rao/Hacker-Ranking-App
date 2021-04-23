var mongoose = require("mongoose");

/*hacker dashboard schema*/

var UserDashboard = new mongoose.Schema({
	name: String,
	profileLink: String,
	location: String,
	education: String,
	challengesSolved: Number,
	solutionsSubmitted: Number,
	solutionsAccepted: Number,
	overallRank: Number,
	followers: Number,
	following: Number,

	competitivePercentiles: {
		dataStructure: Number,
		algorithms: Number,
		cpp: Number,
		java: Number,
		python: Number,
		html: Number,
		javascript: Number,
		numberOfVotes: Number,
		deviceType: String,
		html: Number,
	}
});

UserDashboard.set('timestamps', true);

module.exports = mongoose.model("UserDashboard", UserDashboard);