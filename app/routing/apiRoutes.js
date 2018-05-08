var friends = require("../data/friends.js");
var arr = [];

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function (req, res) {
        var newfriend = req.body
        friends.push(newfriend);
        res.json(newfriend);

        var newfriendscore = req.body.scores;

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 100
        }

        // loop through all the friends database. 
        for (var i = 0; i < friends.length-1; i++) {
            var friendScores = friends[i].scores
            var scoreDifference = 0;

            // loop through scores of each friend to calculate score difference
            for (var h = 0; h < friendScores.length; h++) {
                scoreDifference += Math.abs(parseInt(newfriendscore[h]) - parseInt(friendScores[h]));

            }
            if (scoreDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = scoreDifference;
                
            }     

        }
        console.log(bestMatch);
    });

}