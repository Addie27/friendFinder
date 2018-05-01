var friends= require("../data/friends.js");


module.exports = function (app) {
    app.get("/api/friends", function (req, res){
        res.json(friends); 
    })

    app.post("/api/friends", function (req, res){
        var newfriend = req.body
        friends.push(newfriend);
        res.json(newfriend);

        var newfriendscore = req.body.scores;
        var friendScores = [];
        for (var i = 0; i < newfriendscore.length; i++) {
            friendScores.push(parseInt(newfriendscore[i]));
        }
        console.log(friendScores);
        
        var otherFriend = friends[0].scores; 
        console.log(otherFriend);
        var k;
        var j; 
        var newArray = [];
        var reduced;

        function getSum(total, num) {
            return total + num;
        }
        
        for (j = k = 0; j < friendScores.length && k < otherFriend.length; k++ && j++) {
            console.log(otherFriend[k] - friendScores[j])
            var newNumber = otherFriend[k] - friendScores[j];
           newArray.push(newNumber)
           reduced = newArray.reduce(getSum); 
           
        }
        console.log(reduced);
        
    });

}