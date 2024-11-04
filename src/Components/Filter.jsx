import React from 'react';

// Filter component to filter movies by title or rating
const Filter = ({ filter, setFilter }) => {
  return (
    <div className="mb-6 grid gap-4 md:grid-cols-2">
      <input
        type="text"
        placeholder="Search by title"
        value={filter.title}
        onChange={(e) => setFilter({ ...filter, title: e.target.value })}
        className="border p-2 rounded-lg"
      />
      <input
        type="number"
        placeholder="Minimum rating"
        value={filter.rating}
        onChange={(e) => setFilter({ ...filter, rating: +e.target.value })}
        className="border p-2 rounded-lg"
      />
    </div>
  );
};

export default Filter;
