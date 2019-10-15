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



  //function spotifyTrack(track) {
  
    //console.log(track);
    
      // spotify.search({ type: 'track', query: track }, function(err, response) {
      //   if (err) {
      //     return console.log('Error occurred: ' + err);
      //   }
        
      //   var jsonData = response.tracks;
      //   console.log(jsonData);
        
      //   for (var i = 0; i < 5; i++) {
      //     var divider = "\n------------------------------------------------------------\n\n";
      //     var trackInfo = [
      //       "\nArtist: " + jsonData.items[i].artists[0].name,
      //       "\nTrack Name: " + jsonData.items[i].name,
      //       "\nAlbum Name: " + jsonData.items[i].album.name,
      //       "\nPreview Track: " + jsonData.items[i].preview_url,
      //     ]
    
      //     console.log(divider + trackInfo);
      //   }
          
      // }
      // )};

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