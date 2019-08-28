import React from "react";
import { Link, NavLink } from "react-router-dom";

function SavedList({ list }) {
  console.log(list);
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map(movie => (
        <NavLink
          to={`/movies/${movie.id}`}
          activeStyle={{
            textDecoration: "none",
            color: "black"
          }}
        >
          {movie.title}
        </NavLink>
      ))}
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}

export default SavedList;
