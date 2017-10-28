// friend data

var newFriend = require("../../server.js");
var friends = [
    {
        name:"Sidney Crosby",
        image:"https://nhl.bamcontent.com/images/photos/285859574/1024x576/cut.jpg",
        score:[3, 2, 1, 3, 4, 1, 2, 3, 5, 2]
    },
    {
        name: "Jon Snow",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/15/09/jon-snow.jpg",
        score: [1, 2, 3, 4, 2, 4, 5, 2, 1, 2]
    },
    {
        name: "Anakin Skywalker",
        image: "https://upload.wikimedia.org/wikipedia/en/7/74/Anakin-Jedi.jpg",
        score: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    }
];

module.exports = friends;
