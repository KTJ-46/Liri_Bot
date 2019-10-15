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
      
      var jsonData = response.data;
  
      if (jsonData.title != undefined) {
      }
      else {
      }
        console.log("----------------------------------------------------------");
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        console.log("----------------------------------------------------------");
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

      function concertThis(concert) {

        var concertQuery = concert || "'The Sign' by Ace of Base"
      
        axios.get("https://rest.bandsintown.com/artists/" + concertQuery + "/events?app_id=codingbootcamp").then(function(response) {
          var jsonData = response.data;
          // console.log(jsonData);
          for (var i = 0; i < jsonData.length; i++) {
            var divider = "\n------------------------------------------------------------\n\n";
            var concertFind = [
              "\nVenue Name: " + jsonData[i].venue.name,
              "\nLocation: " + jsonData[i].venue.city,
              "\nDate of Concert: " + moment(jsonData[i].datetime).format("L"),
            ].join("\n\n")
            // console.log("THIS IS JSONDATA", jsonData[i].datetime);
            
            fs.appendFile("log.txt", concertFind + divider, function(err) {
              if(err) throw err;
              console.log(divider + concertFind);
            });
      
              console.log(divider + concertFind);
              //console.log(concertThis);
          };
            
        });
      };   



      function doWhatItSays() {
        fs.readFile("random.txt", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            var dataArr = data.split(",");
            command = dataArr[0];
            query = dataArr[1];
            spotifyThis();
        });
    };