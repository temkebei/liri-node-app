require('dotenv').config();
const Spotify = require('node-spotify-api');
const keys = require("./keys.js");
const request = require('request');
const spotify = new Spotify(keys.spotify)
    // process.argv will print out any command line arguments
const input = process.argv;
// a variable to hold all possible liri commands entered
// spotify-this-song // movie-this //
const liriCommand =input[2];
//If the liriCommand is spotify-this-song,we need a variable to hold the song name.
let songName = " ";
for(let i = 3; i < process.argv.length;i++){
  songName += process.argv[i] + " "
  }
  console.log(songName)
//If the liriCommand is spotify-this-song, show song info for the specified song.
if (liriCommand === "spotify-this-song") {
    getSongInfo(songName);
}
else if(liriCommand === 'movie-this'){
  movie(songName);
}
//run this function to get info about a specific song
function getSongInfo(songName) {
//  //Use the Spotify package to search for a song/track. Set search results limit to 10.
spotify.search({type:'track',query:songName,limit: 10}, function(err,data){
  if(err){
    return console.log('error occurred:'+err);
  };
//Loop through the JSON data to display the top songs.
for(let i=0; i <data.tracks.items.length; i++){
    //Display song no for each song,the first song returned will be #1, the second #2, etc.
  console.log("Song #" + (i+1));
    //Output the artist
    console.log("Artist:" + data.tracks.items[i].artists[0].name);
    //Output the song's name.
    console.log("Song title:" + data.tracks.items[i].name)
    //Output a preview link of the song from Spotify.
    console.log("Preview song:" + data.tracks.items[i].preview_url);
    //Output the album that the song is from.
  console.log("Album:" + data.tracks.items[i].album.name);
}
})
}

//
function movie (movieName){
console.log("movie")
	// const movieName = "";

	const  URL = "http://www.omdbapi.com/?t="+movieName+"&y=&plot=full&tomatoes=true&apikey=trilogy"

	request(URL, function (error, response, body) {
		if(error){
		  console.log('error:', error); // this Print the error if one occurred 
		}else{
      // console.log('statusCode:',
      // response && response.statusCode); 
      // Print the response status code if a response was received
			// console.log(body); 
			const requestObject = JSON.parse(body);
			console.log('Movie Title:', requestObject.Title );
			console.log('Movie imdbRating:', requestObject.imdbRating);
			console.log('Movie Year:', requestObject.Year);
			console.log('Movie Country:', requestObject.Country);
			console.log('Movie Language:', requestObject.Language);
			console.log('Movie Plot:', requestObject.Plot);
			console.log('Movie Actors:', requestObject.Actors);
		//	AAAaaconsole.log('Movie RottenTotmatesRating:', requestObject.Ratings[1].Source, requestObject.Ratings[1].Value);
			// console.log('Movie Url:', requestObject.Website); 
		}
	});

};
  