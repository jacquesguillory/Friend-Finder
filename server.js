// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

// Express app
var app = express();
var PORT = process.env.PORT || 3000;

// data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// getting friends data
var friends = require("./app/data/friends.js");
console.log(friends);


// Routes

// can't make these requires work
// require("./app/routing/apiRoutes.js")(app);
// require("./app/routing/htmlRoutes.js")(app);


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function(req, res) {
    res.json(friends);
});



app.post("/api/friends", function(req, res){
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  
    console.log(newFriend);
    // al gore rhythm for finding best match
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


// Listener
app.listen(PORT, function(){
    console.log("Listening on PORT " + PORT)
});