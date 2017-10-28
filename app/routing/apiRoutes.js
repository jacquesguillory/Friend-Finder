module.exports = function(app) {


    app.post("/api/friends", function(req, res){
        var newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    
        console.log(newFriend);
        // al gore rythm for finding best match
        var bestMatch = {};
        var lowDifference = 1000;
        for(i=0; i<friends.length; i++){
            var totalDifference = 0;
            for(j=0; j<friends[i].score.length; j++){
                var difference = Math.abs(newFriend.score[j] - friends[i].score[j]);
                totalDifference = totalDifference + difference;
                console.log(difference);
            }
            console.log(parseInt(totalDifference));
            console.log(lowDifference);
            if(totalDifference <= lowDifference){
                bestMatch = friends[i];
                lowDifference = totalDifference;
            }
        }
    

        console.log(bestMatch);
        res.json(bestMatch);
        friends.push(newFriend);

    });
};