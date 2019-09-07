require('dotenv').config();

let moment = require('moment');
let keys = require("./keys.js");
let spotify1 = require("node-spotify-api");
let spotify2 = new spotify(keys.spotify2);
let NodeGeocoder = require('node-geocoder');
let fs = require('fs');
let bandsInTown = (keys.bandsintown);
let axios = require('axios')
let omdb = (keys.omdb);
let inquirer = require('inquirer');

let command = process.argv[2];
let query = process.argv[3];



// spotify2.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//         return console.log('Error occurred: ' + err);
//     }

//     console.log(data);
// });

// need a user command with a switch/case thingy function for USER COMMAND

function inputs(command, query) {
    switch (command) {
        case 'concert-this':
            concert(query);
            break;
        case 'spotify-this-song':
            song(query);
            break;
        case 'movie-this':
            movie(query);
            break;
        case 'do-what-it-says':
            info();
            break;
        default:
            console.log("invalid")
    }
}

//functiton for concert-this

function concert(query) {
    let queryUrl = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp";
    request(queryUrl, function(error, response, body)

            //function for spotify-this-song

            //function for movie-this:

            //function for do-what-it-says




            //file-reading function that calls spotifyMe function using contents of the text file as parameter





            //conditions to determine which function to call