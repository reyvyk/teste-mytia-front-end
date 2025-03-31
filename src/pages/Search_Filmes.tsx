import { useSearchParams } from 'react-router-dom'
import useServiceAPI from '../hooks/useServiceAPI'

import Filme_Card from '../components/Filme_Card/Filme_Card'

const API_KEY = import.meta.env.VITE_API_KEY
const API_SEARCH = import.meta.env.VITE_API_SEARCH

const Search_Filmes = () => {
  const [searchParams] = useSearchParams()
  const busca = searchParams.get('q')

  const { data: searchResults, isLoading, error } = useServiceAPI<any>(`${API_SEARCH}${API_KEY}&query=${busca}`)

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="flex flex-row flex-wrap justify-content-center">
        {searchResults &&
          searchResults.results.map((filme: any) => (
            <Filme_Card key={filme.id} filme={filme} />
          ))
        }
      </div>
    </>
  );
};

export default Search_Filmes;
