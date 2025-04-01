import Filme_Card from '../components/Filme_Card/Filme_Card'
import useServiceAPI from '../hooks/useServiceAPI'

const Home = () => {
  const API_KEY = import.meta.env.VITE_API_KEY
  const API_URL = import.meta.env.VITE_API

  const { data: popularMovies, isLoading, error } = useServiceAPI<any>(API_URL+API_KEY)
  
  return (
    <>
    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    <div className='container flex flex-column align-items-center'>
      <h1 className='sm:block text-lg'>Filmes Populares</h1>
        <div className='flex flex-row flex-wrap justify-content-center'>
          {popularMovies && (
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