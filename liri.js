require("dotenv").config();


// required packages
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require ("fs");
var Spotify = require("node-spotify-api");

// Spotify key and id
var spotify = new Spotify({
	id: keys.spotify.id,
	secret: keys.spotify.secret
});

//user Input

var input = process.argv[2];
var searchterm = process.argv [3];

// If-else cases based on user input

if (input === 'movie-this') {
    movieThis(searchterm);
  } 
  
  else if (input === 'concert-this') {
    concertThis(searchterm);
  }
  
  else if (input === 'spotify-this-song') {
    spotifyThis(searchterm);
  } 
  else if (input === 'do-what-it-says') {
    doWhatItSays(searchterm);
  }
  else {
    console.log('enter a valid command');
  
  }



  
  function movieThis(movie) {

    var movieQuery = movie || "Mr. Nobody"
    
    axios.get("http://www.omdbapi.com/?t=" + movieQuery + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(function(response) {
      
      var divider = "\n------------------------------------------------------------\n\n";
      var jsonData = response.data;
  
      if (jsonData.title != undefined) {
      }
      else {
      }
  
      var movieData = [
        "Title: " + jsonData.Title,
        "Year: " + jsonData.Year,
        "imdb Rating: " + jsonData.imdbRating,
        "Country: " + jsonData.Country,
        "Language: " + jsonData.Language,
        "Plot: " + jsonData.Plot,
        "Cast: " + jsonData.Actors,
      ].join("\n\n");
      console.log(divider + movieData);
    })};


      function spotifyThis(Song){

        var song = Song || process.argv[3] || "The Sign Ace of Base";
      
        spotify.search({type: "track", query: song, limit: 1}, function(error, data) {
          if (error) throw error;
      
          if (data.tracks.items.length > 0){
            for (var i = 0; i < data.tracks.items[0].artists.length; i++) {
            console.log("Artist: " + data.tracks.items[0].artists[i].name + "\n");
            }
          }
          console.log("Song Name: " + data.tracks.items[0].name + "\n");
          console.log("Song Preview: " + data.tracks.items[0].external_urls.spotify + "\n");
          console.log("Album Name: " + data.tracks.items[0].album.name + "\n");
        });
      }