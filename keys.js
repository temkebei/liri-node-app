
    console.log('this is loaded');
    
    exports.spotify = {
      id: process.env.SPOTIFY_ID,
      secret: process.env.SPOTIFY_SECRET
    };
    
    exports.moviekeys = {
    apikey: process.env.moviekeys
    };
    exports.bandsInTown= {
      apikey: process.env.bandsInTown
    };

