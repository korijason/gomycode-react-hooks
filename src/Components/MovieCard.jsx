import React from 'react';

// MovieCard component displays details for a single movie
const MovieCard = ({ movie }) => (
  <div className="border rounded-lg shadow-lg p-4 bg-white">
    <img src={movie.posterURL} alt={movie.title} className="w-full h-60 object-cover rounded-md" />
    <h2 className="text-xl font-bold mt-4">{movie.title}</h2>
    <p className="text-gray-700 mt-2">{movie.description}</p>
    <p className="font-bold text-yellow-500 mt-2">Rating: {movie.rating}</p>
  </div>
);

export default MovieCard;
