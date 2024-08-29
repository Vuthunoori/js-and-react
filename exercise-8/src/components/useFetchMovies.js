import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

const API_KEY = 'fecdf20bc4456bcc6e018d19cd4820d5';

export const useFetchMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = debounce(async () => {
      if (!query) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setMovies(data.results || []);
      } catch (err) {
        setError('Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    }, 500); // Debounce delay of 500ms

    fetchMovies();

    return () => {
      fetchMovies.cancel();
    };
  }, [query]);

  return { movies, loading, error };
};
