import React from "react";

//Displays a list of movies and allows selection of a specific movie

//MovieList has 2 properties
//the property of movies is for holding the lists of movies
//the property of onSelectMovie is gonna be given in App.js
const MovieList = ({ movies, onSelectMovie }) => {
    return (
        <div>
            <h2>Movies</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id} onClick={() => onSelectMovie(movie)} >
                        {movie.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;