var request = require("request");
var fs = require("fs");
// var omdb = require("omdb")

// Create the TV constructor
var Movie = function () {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findMovie = function (movie) {
    var URL = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie;

    request(URL, function (err, response, body) {
      // Parse the response body (string) to a JSON object
      var jsonData = JSON.parse(body);
      
      // showData ends up being the string containing the show data we will print to the console
      var movieData = [
        "Movie Title: " + jsonData.Title,
        "Year: " + jsonData.Year,
        "IMDb Rating: " + jsonData.imdbRating,
        "Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value,
        // "Country: " + jsonData.network.name,
        // "Language: " + jsonData.summary,
        // "Plot: " + jsonData.summary,
        // "Actors: " + jsonData.summary,
        
      ].join("\n");

      console.log(movieData + divider);

      // Append showData and the divider to log.txt, print showData to the console
      // fs.appendFile("log.txt", movieData + divider, function (err) {
      //   if (err) throw err;
      //   console.log(movieData);
      // });
    });
  };
};

module.exports = Movie;
