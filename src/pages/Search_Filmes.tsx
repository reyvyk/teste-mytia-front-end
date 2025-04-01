import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { useSearchParams } from 'react-router-dom'
import useServiceAPI from '../hooks/useServiceAPI'
import { useEffect, useState } from 'react'

import Filme_Card from '../components/Filme_Card/Filme_Card'

const API_KEY = import.meta.env.VITE_API_KEY
const API_SEARCH = import.meta.env.VITE_API_SEARCH

const Search_Filmes = () => {
  const [searchParams] = useSearchParams()
  const busca = searchParams.get('q')

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);
  
  const { data: searchResults, isLoading, error } = useServiceAPI<any>(`${API_SEARCH}${API_KEY}&query=${busca}&page=${currentPage}`)

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
    setCurrentPage(event.page + 1);
  };

  useEffect(() => {},[currentPage])


  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="flex flex-row flex-wrap justify-content-center">
        {searchResults &&
          searchResults.results.map((movie: any) => (
            <Filme_Card key={movie.id} movie={movie} />
          ))
        }
      </div>
      <div className="card">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={searchResults?.total_results || 0}
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default Search_Filmes;
