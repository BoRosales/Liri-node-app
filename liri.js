// Read and set environmental variables. 
require("dotenv").config();

let request = require('request');


let start = process.argv[2];
console.log(start);
// What we want : concert-this, spotify-this-song, movie-this, do-what-it-says

switch(start) {
    case "movie-this" :
        movie();
        break;


}

// Here we run the movie functions which gets us the movie info when entering any movie name.
function movie(){
    let movieName = process.argv[3];
    if ( movieName === undefined) {
         console.log("If you haven't watched 'Mr. Nobody,' then you should. http://www.imdb.com/title/tt0485947/ It's on Netflix!");
         movieName = "Mr. Nobody"
    }

    let queryMovieURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    request(queryMovieURL, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            let json = JSON.parse(body);
            
            console.log("The title of the movie is: " + json.Title);
            console.log("The movie's release date is: " + json.Released);
            console.log("The IMDB Rating is: " + json.imdbRating);
            console.log("The Rotten Tomatoes rating is: " + json.Ratings[1].Value);
            console.log("The country where this was produced: " + json.Country);
            console.log("Language of the movie is: " + json.Language);
            console.log("Actors in the movie:" + json.Actors);
            //get back a json string in order to get it as an object
    
        }
    })
}