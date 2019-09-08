return axios.get(URL).then(function(response) {

            // Place the response.data into a variable, jsonData.
            let jsonData = response.data;

            // showData ends up being the string containing the show data we will print to the console
            let showData = [
                "Venue: " + jsonData.venue.name,
                "Location: " + jsonData.venue.city,
                "Date: " + moment(jsonData.datetime).format("MM/DD/YY"),
            ].join("\n\n");