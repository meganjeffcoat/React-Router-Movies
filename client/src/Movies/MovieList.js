import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard.js";

function MovieList(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovies(res.data))
      .catch(error => console.error("Server Error", error));
  }, [setMovies]);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`}>
          <MovieCard key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;