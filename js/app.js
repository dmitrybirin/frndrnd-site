(function(){

    const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

    const gaLogClick = function () {
        ga('send', 'event', 'button', 'click', 'RandomEpisode')
    };

    document.querySelector('#button').addEventListener('click', () => {
        var episodeCount = [ 24, 24, 25, 24, 24, 25, 24, 24, 24, 17 ]
        
        this.season = getRandomIntInclusive(1,10)
        this.episode = getRandomIntInclusive(1,episodeCount[this.season-1])
        
        console.log(`
            ------FRIENDS RANDOM-------
            Season: ${this.season}
            Episode: ${this.episode}
        `)
        const seasonP = document.querySelector('p.results#season')
        const episodeP = document.querySelector('p.results#episode')

        seasonP.innerHTML = `Season: ${this.season}`
        seasonP.className = `${seasonP.className} white-color`
        episodeP.innerHTML = `Episode: ${this.episode}`
        episodeP.className = `${seasonP.className} white-color`

    })
    
    gaLogClick();
            
}());