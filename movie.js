var request = require("request");
var fs = require("fs");
// var omdb = require("omdb")

// Create the Movie constructor
var Movie = function () {
  // divider will be used as a spacer between the movie data printed on the console and in log.txt
  var divider = "\n\n------------------------------------------------------------\n\n";

  // findMovie takes in the name of a movie and searches the OMDb site
  this.findMovie = function (movie) {
    var URL = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie;

    request(URL, function (err, response, body) {
      // Parse the response body (string) to a JSON object
      var jsonData = JSON.parse(body);
      
      // movieData ends up being the string containing the movie data we will print to the console
      var movieData = [
        "Movie Title: " + jsonData.Title,
        "Year: " + jsonData.Year,
        "IMDb Rating: " + jsonData.imdbRating,
        "Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value,
        "Country: " + jsonData.Country,
        "Language: " + jsonData.Language,
        "Plot: " + jsonData.Plot,
        "Actors: " + jsonData.Actors,

      ].join("\n");

      // console.log(movieData + divider);

      // Append movieData and the divider to log.txt, print movieData to the console
      fs.appendFile("log.txt", movieData + divider, function (err) {
        if (err) throw err;
        console.log(movieData + divider);
      });
    });
  };
};

module.exports = Movie;
