require("dotenv").config();


// required packages
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require ("fs");
var spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
