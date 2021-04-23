const UserDashboard = require('../model/userDashboard');

setInterval(() => {
    UserDashboard.aggregate([
        {
            $set: {
                calculatedVal: {
                    $multiply:
                        [
                            { $avg: ["$competitivePercentiles.dataStructure", "$competitivePercentiles.cpp", "$competitivePercentiles.algorithms", "$competitivePercentiles.java", "$competitivePercentiles.python", "$competitivePercentiles.html", "$competitivePercentiles.javascript"] },
                            { $divide: ["$solutionsAccepted", "$solutionsSubmitted"] }

                        ]
                }
            }
        },
        {
            $sort: {
                calculatedVal: -1
            }
        },
    ], function (err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            docs.forEach((singleDoc, index) => {
                singleDoc.overallRank = index + 1;
                UserDashboard.findByIdAndUpdate({ _id: singleDoc._id }, singleDoc, function (err, sDoc) {
                    if (err) {
                        return null
                    }
                    else {
                        return sDoc
                    }
                })
            })
        }
    })
}
    , 500000)