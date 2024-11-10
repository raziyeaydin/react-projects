import React, { useState } from "react";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  const [movies] = useState([
    { id: 1, title: "Inception", description: "A mind-bending thriller.", rating: 5, comments: [] },
    { id: 2, title: "The Matrix", description: "A sci-fi classic.", rating: 4, comments: [] },
    { id: 3, title: "Interstellar", description: "A journey through space and time.", rating: 5, comments: [] }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div>
      <h1>Movie Database</h1>
      <MovieList movies={movies} onSelectMovie={setSelectedMovie} />
      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default App;
