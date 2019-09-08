require('dotenv').config();

let fs = require('fs');
let keys = require("./keys.js");
let moment = require('moment');
let Spotify = require("node-spotify-api");
let bandsInTown = (keys.bandsintown);
let axios = require('axios')
let omdb = (keys.omdb);
let command = process.argv[2];
let query = process.argv[3];

function inputs(command, query) {
    switch (command) {
        case 'concert-this':
            concert;
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

    }
};

let concert = function(query) {

    return axios.get("https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp").then(function(response) {

        let showData = [
            "Venue: " + response.data.venue.name,
            "Location: " + response.data.venue.city,
            "Date: " + moment(response.data.datetime).format("MM/DD/YY"),
        ]

    })
};
console.log(concert);
module.exports = concert;