import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import MovieList from "./MovieList";
import SearchInputBox from "./SearchInputBox";
import { getMoviesForTerm } from "./omdbAPI";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchingState, setSearchingState] = useState(false);

  function searchTermChanged(newSearchTerm) {
    setSearchingState(true);
    getMoviesForTerm(newSearchTerm, updateUIWithNewMovies);
  }

  function updateUIWithNewMovies(newMovies) {
    console.log(newMovies);
    setSearchingState(false);
    setMovies(newMovies);
  }

  return (
    <div>
      <h1> Movie Search </h1>
      <SearchInputBox onSearchTermChange={searchTermChanged} />

      {searchingState ? "seaching..." : <MovieList movies={movies} />}
    </div>
  );
}

export default App;
