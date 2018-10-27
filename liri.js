// require("dotenv").config();


// Require import of the `keys.js` file and store it in a variable.
// var keys = require("./keys.js");

// Access keys information

var Movie = require("./movie");

// Create a new Movie object
var movie = new Movie();

// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

// By default, if no search type is provided, search for a tv show
if (!search) {
  search = "movie-this";
}

// By default, if no search term is provided, search for "Mr. Nobody"
if (!term) {
  term = "Mr. Nobody";
}

// Print searching for a movie, print the term as well

console.log("Searching for Movie");
movie.findMovie(term);

