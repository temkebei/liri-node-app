require('dotenv').config();
const Spotify = require('node-spotify-api');
 
const spotify = new Spotify({
  id: '9691f5fa331a45d08bc8aef2c0c5861b',
  secret: '8c9fcab5a4ef43418d2b224c05e62795'
}); 
  spotify.request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });


    // process.argv will print out any command line arguments
const input = process.argv;

// a variable to hold all possible liri commands entered
// spotify-this-song // movie-this //
const liriCommand =input[2];

//If the liriCommand is spotify-this-song,we need a variable to hold the song name.
const songName = input[3];

//If the liriCommand is spotify-this-song, show song info for the specified song.
if (liriCommand === "spotify-this-song") {
	getSongInfo(songName);
}

//run this function to get info about a specific song
function getSongInfo(songName) {
  const spotify = new spotify({
    id: process.env.SPOTIFY_ID,
      secret: process.env.SPOTIFY_SECRET
  })
}

// 	//Use the Spotify package to search for a song/track. Set search results limit to 10.
spotify.search({type:'track',query:songName,limit: 10}, function(err,data){
  if(err){
    return console.log('error occurred:'+err);
  };
});

//Loop through the JSON data to display the top songs.
for(let i=0; i <data.tracks.items.length; i++){
  	//Display song no for each song,the first song returned will be #1, the second #2, etc.
  console.log("Song #" + (i+1));
  	//Output the artist
	console.log("Artist: " + data.tracks.items[i].artists[0].name);
	//Output the song's name.
	console.log("Song title: " + data.tracks.items[i].name)
	//Output a preview link of the song from Spotify.
	console.log("Preview song: " + data.tracks.items[i].preview_url);
	//Output the album that the song is from.
  console.log("Album: " + data.tracks.items[i].album.name);

}
  
  
