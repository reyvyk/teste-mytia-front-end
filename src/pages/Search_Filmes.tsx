import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

import Filme_Card from '../components/Filme_Card/Filme_Card'

const moviesURL = import.meta.env.VITE_API_SEARCH
const apikey = import.meta.env.VITE_API_KEY

interface Filmes {
  id: number
  title: string
  overview: string
  release_date: string
  poster_path: string
}

const Search_Filmes = () => {
  const [searchParams] = useSearchParams()

  const [searchResults, setSearchResults] = useState<Filmes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const query = searchParams.get('q')

  useEffect(() => {
    const fetchData = async () => {
      
      setIsLoading(true)
      setError(null)

      try {
        const response = await axios.get(
          `${moviesURL}?${apikey}&query=${query}`
        );
        setSearchResults(response.data.results);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message)
        } else if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setIsLoading(false)
      }
    };

    // Debounce the search to avoid making too many requests
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(timeoutId); // Cleanup on unmount or searchTerm change
  }, [query]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="flex flex-row flex-wrap justify-content-center">
        {searchResults.map((filme) => (
          <div key={filme.id}>
            <Filme_Card filme={filme} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Search_Filmes;
