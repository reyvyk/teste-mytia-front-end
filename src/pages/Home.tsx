import Filme_Card from '../components/Filme_Card/Filme_Card'
import useServiceAPI from '../hooks/useServiceAPI'

const Home = () => {

  const API_KEY = import.meta.env.VITE_API_KEY
  const API_URL = import.meta.env.VITE_API

  const { data: popularMovies, isLoading, error } = useServiceAPI<any>(API_URL+API_KEY)

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>{error}</p>
  
  return (
    <>
      <h1>Filmes</h1>
        <div className='flex flex-row flex-wrap justify-content-center'>
          {popularMovies && (
            popularMovies.results.map((filme: any) => (
              <Filme_Card key={filme.id} filme={filme} />
            ))
          )}
        </div>
    </>
  )
}

export default Home