
import React, { useState } from 'react';
import { useFetchMovies } from './useFetchMovies';


function MovieSearch() {
  const [query, setQuery] = useState('');
  const { movies, loading, error } = useFetchMovies(query);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieSearch;
