import Filme_Card from '../../components/Filme_Card/Filme_Card'
import { fetchPopularMovies } from '../../hooks/apiService'
import useServiceAPI from '../../hooks/useServiceAPI'

const Home = () => {
  const { data: popularMovies, isLoading, error } = useServiceAPI(fetchPopularMovies)
  
  return (
    <>
    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    <div className='container flex flex-column align-items-center'>
      <h1 className='sm:block text-lg'>Filmes Populares</h1>
        <div className='flex flex-row flex-wrap justify-content-center'>
          {popularMovies?.results?.length && (
            popularMovies.results.map((movie: any) => (
              <Filme_Card key={movie.id} movie={movie} />
            ))
          )}
        </div>
    </div>
    </>
  )
}

export default Home