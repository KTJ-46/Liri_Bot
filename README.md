# Liri_Bot
Creating a Node JS application to use language interpretation and provide results for songs and music bands using user input
Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
Give a high-level overview of how the app is organized
Give start-to-finish instructions on how to run the app
Include screenshots, gifs or videos of the app functioning
Contain a link to a deployed version of the app
Clearly list the technologies used in the app
State your role in the app development

This app provides information about songs, movies, concert dates for users based on their search query.
--------------------------------------------------------------------------------------------------------------------------
It takes input from the user in the terminal after typing the command in a specific format and gives the output in the terminal. NPM modules of Spotify, Axios, Moment are used. API calls are made to OMDB, Spotify, Bands in Town endpoints to retrive the information

## Instructions(execute in the terminal) -
* for song info.- type node liri.js spotify-this <"song name">
* for movie info.- type node liri.js movie-this <'movie name">
* for concert info.- type node liri.js concert-this <"band/artist name">
