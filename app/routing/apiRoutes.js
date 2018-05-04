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
        
        // loop through all the friends database. 
        for (var i = 0; i < friends.length; i++) {
            var scoreDifference = 0;
 
            // loop through scores of each friend to calculate score difference
            for (var h = 0; h < friends[i].scores[h]; h++) {
                scoreDifference += Math.abs(parseInt(newfriendscore[h]) - parseInt(friends[i].scores[h]));
                console.log(scoreDifference)
            
            }
        }  
    });

}