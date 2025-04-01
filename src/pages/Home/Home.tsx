import { FaGithub, FaLinkedin, FaInstagram, FaCopyright } from 'react-icons/fa'
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
        <div className='footer flex flex-column align-items-center justify-content-center m-2 p-2'>
          <h1 className='text-xs'><FaCopyright /> Reyvyk Ferreira </h1>
          <span className='flex flex-row justify-content-center align-items-center'>
            <a href="https://github.com/reyvyk" target="_blank" rel="noopener noreferrer" className='m-2'>
              <FaGithub />
            </a>
            <a href='http://www.linkedin.com/in/reyvyk-ferreira' target='_blank' rel="noopener noreferrer" className='m-2'>
              <FaLinkedin />
            </a>
            <a href='https://www.instagram.com/reyvykferreira/' target='_blank' rel="noopener noreferrer" className='m-2'>
              <FaInstagram />
            </a>
          </span>
        </div>
    </div>
    </>
  )
}

export default Home