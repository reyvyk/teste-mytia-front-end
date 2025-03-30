import { useState, useEffect } from 'react'
import axios from 'axios';
import Filme_Card from '../components/Filme_Card/Filme_Card';

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

type Filmes = {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
}

const Home = () => {
	const [filmesPopular, setFilmesPopular] = useState<Filmes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect( ()=> {
    const fetchData = async () => {
      try {
        console.log(`${moviesURL}top_rated?api_key=${apikey}`)
        const response = await axios.get(`${moviesURL}top_rated?${apikey}`);
        setFilmesPopular(response.data.results)
        console.log(moviesURL)
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchData();
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      <h1>Filmes</h1>
        <div className='flex flex-row flex-wrap justify-content-center'>
          {filmesPopular.map((filme) => (
            <div key={filme.id} >
              <Filme_Card
                filme={filme}
              />
            </div>
          ))}
        </div>
    </>
  )
}

export default Home