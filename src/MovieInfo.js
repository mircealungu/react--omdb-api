import { useEffect, useState } from "react";
import "./MovieInfo.css";
import { getMovieDetails } from "./omdbAPI";

export default function MovieInfo({ movie }) {
  const [detailedInfo, setDetailedInfo] = useState(null);

  useEffect(() => {
    getMovieDetails(movie.imdbID, updateMovieDetails);
  }, []);

  function updateMovieDetails(movieInfo) {
    console.log(movieInfo);
    setDetailedInfo(movieInfo);
  }

  if (!detailedInfo) {
    return (
      <div className="movieInfo">
        <h2>{movie.Title}</h2>
        <br />
        <img src={movie.Poster} width="200px" />
      </div>
    );
  }

  // if we get here, we have detailed info
  return (
    <div className="movieInfo">
      <h2>
        {movie.Title} ({detailedInfo.Year}) - {detailedInfo.imdbRating}
      </h2>

      <br />
      <img src={movie.Poster} width="200px" />
      <h4>{detailedInfo.Genre}</h4>
      <h4>{detailedInfo.Director}</h4>
    </div>
  );
}
