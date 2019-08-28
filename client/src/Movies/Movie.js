import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard.js";

function Movie(props) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const id = props.match ? props.match.params.id : null;
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(error => console.error("ERR: ", error));
  }, [props.match, setMovie]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <div className="save-button" onClick={() => props.addToSavedList(movie)}>
        Save
      </div>
    </div>
  );
}

export default Movie;