(function(){

angular.module('ButtonApp', ['ngMaterial'])
    .controller('MainCtrl', function() {

    function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.click = function(){
        var seasonList = {
        3:25,
        6:25,
        10:17
        };
        
        this.season = getRandomIntInclusive(1,10);

        if (seasonList.hasOwnProperty(this.season.toString()))
        {
        this.episode = getRandomIntInclusive(1,seasonList[this.season]);  
        }
        else 
        {
        this.episode = getRandomIntInclusive(1,24);
        }
        
        console.log("------FRIENDS RANDOM-------");
        console.log("Season: " + this.season);
        console.log("Episode: " +  this.episode);

        var gaLogClick = function () {
        ga('send', 'event', 'button', 'click', 'RandomEpisode');
        };
        
        gaLogClick();
            
    }
    
});
}());