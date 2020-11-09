import MovieInfo from "./MovieInfo";

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((each) => (
        <MovieInfo key={each.imdbID} movie={each} />
      ))}
    </ul>
  );
}
