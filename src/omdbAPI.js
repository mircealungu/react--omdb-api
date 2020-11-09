import Request from "superagent";

const api_key = process.env.REACT_APP_OMDB_API_KEY;

function getMoviesForTerm(searchTerm, actionToPerformWithMovies) {
  console.log("getting movies for " + searchTerm);
  const url = `http://omdbapi.com/?apikey=${api_key}&s=${searchTerm}}`;
  Request.get(url).then((result) => {
    var movieList = result.body.Search;
    actionToPerformWithMovies(movieList);
  });
}

function getMovieDetails(movieID, actionToPerformWithMovieDetails) {
  const url = `http://omdbapi.com/?i=${movieID}&apikey=${api_key}`;
  console.log(url);
  Request.get(url)
    .then((result) => {
      var movieDetails = result.body;
      actionToPerformWithMovieDetails(movieDetails);
    })
    .catch((err) => console.log(err.rawResponse));
}

export { getMoviesForTerm, getMovieDetails };
