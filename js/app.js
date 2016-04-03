(function(){

angular.module('ButtonApp', ['ngMaterial'])
    .controller('ButtonCtrl', function() {

    function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var seasonList = {
    3:25,
    6:25,
    10:17
    };

    var season = getRandomIntInclusive(1,10);
    var episode = 0;

    if (seasonList.hasOwnProperty(season.toString()))
    {
    episode = getRandomIntInclusive(1,seasonList[season]);  
    }
    else 
    {
    episode = getRandomIntInclusive(1,24);
    }

    console.log("------FRIENDS RANDOM-------");
    console.log("Season: " + season);
    console.log("Episode: " + episode);
    this.link = "http://friends-online.co/eng/" + season + "-season/" + episode + "-seria-" + season + "-season.html";
    console.log("Opening the episode " + episode + " of the season " + season);
    this.gaLogClick = function () {
    ga('send', 'event', 'button', 'click', 'RandomEpisode');
    };
});
}());