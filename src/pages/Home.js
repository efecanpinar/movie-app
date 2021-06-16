import React, { useContext } from "react";

import { Link } from "react-router-dom";

import Input from "../components/Input";
import { MovieContext } from "../context/MovieContext";
import Card from "../components/Card";
import "../styles/Home.css";

const Home = () => {
  const { setSearch, movies, favoriteHandler } = useContext(MovieContext);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home-container">
      <Input handleSearch={handleSearch} />
      {/* conditional rendering */}
      {movies?.length > 0 ? (
        <div className="movies">
          {movies?.map((movie) => {
            return (
              <Link /*'movies/tt1201607'*/
                to={`movies/${movie.imdbID}`} /* Router.js dinamik path yapısıyla aynı olacak şekilde imdbID ile routing işlemini yapınız */
                className="text-link"
                key={movie.imdbID}
              >
                <Card
                  key={movie.imdbID}
                  image={movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                  addFavorite={(e) => favoriteHandler(movie, e)}
                  isFavorite={movie.isFavorite}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="search-warning">
          <p>Search a movie!</p>
          <p>i.e. Harry Potter</p>
        </div>
      )}
    </div>
  );
};

export default Home;
