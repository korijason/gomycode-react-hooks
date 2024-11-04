import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

// Main application component
const App = () => {
  // Initial state with a few movie objects
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A skilled thief is given a chance at redemption...',
      posterURL: './Images/download1.jpeg',
      rating: 8.8,
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole...',
      posterURL: './Images/download2.jpeg',
      rating: 8.6,
    },
  ]);

  // State for the filter criteria
  const [filter, setFilter] = useState({ title: '', rating: 0 });

  // Function to add a new movie to the list
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filter movies based on title and rating criteria
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
    movie.rating >= filter.rating
  );

  return (
    <div className="App container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Movie List</h1>
      {/* Filter component to filter movies by title or rating */}
      <Filter filter={filter} setFilter={setFilter} />
      {/* MovieList component displaying the filtered movies */}
      <MovieList movies={filteredMovies} addMovie={addMovie} />
    </div>
  );
};

export default App;
