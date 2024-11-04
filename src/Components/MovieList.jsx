import React, { useState } from 'react';
import MovieCard from './MovieCard';

// MovieList component to list movies and provide a form for adding new movies
const MovieList = ({ movies, addMovie }) => {
  // State to hold new movie details entered by user
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  // Function to handle form submission and add the new movie
  const handleAddMovie = (e) => {
    e.preventDefault();
    addMovie(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 });
  };

  return (
    <div className="my-6">
      <h2 className="text-2xl font-semibold mb-4">Add a New Movie</h2>
      {/* Form to capture new movie details */}
      <form onSubmit={handleAddMovie} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          required
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
          required
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
          required
          className="border p-2 rounded-lg"
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: +e.target.value })}
          required
          className="border p-2 rounded-lg"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg w-full md:col-span-2 lg:col-span-4">
          Add Movie
        </button>
      </form>
      {/* Display each movie as a MovieCard component */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
