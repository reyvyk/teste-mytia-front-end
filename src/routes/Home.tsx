import { useState, useEffect } from 'react'
import axios from 'axios';

//api key
import { apikey } from '../configs/apiTMDB';

type Filmes = {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
}

const Home = () => {
	const [filmes, setFilmes] = useState<Filmes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect( ()=> {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`);
        setFilmes(response.data.results)
        console.log(response.data.results)
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        }
        
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
      <ul>
        {filmes.map((filme) => (
          <li key={filme.id}>
            {filme.title} /
            {filme.release_date} /
            {filme.vote_average} /
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home