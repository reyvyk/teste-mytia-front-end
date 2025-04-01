import useServiceAPI from "../hooks/useServiceAPI"
import { useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { Card } from "primereact/card";

interface MovieDetails {
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_API_ID_MOVIE

const Details = () => {
  const {id} = useParams()
  const {data: movieDetails, isLoading, error} = useServiceAPI<MovieDetails>(`${API_URL}${id}?${API_KEY}`)

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>} 
      {movieDetails &&
        <div className="card mt-10">
          <Card className="m-2">
            <div className="flex flex-column align-items-center justify-content-center">
              <div className="flex flex-row justify-content-center align-items-center w-10 flex-wrap">
                <div>
                  <img src={import.meta.env.VITE_API_IMG + movieDetails.poster_path} alt={movieDetails.title} className="w-20rem" />
                </div>
                <div className="ml-4 w-25rem">
                  <h1 className="text-4xl font-bold sm:text-2xl">{movieDetails.title}</h1>
                  <h3 className="text-xl sm:text-base">{movieDetails.release_date}</h3>
                  <h2 className="text-xl sm:text-base">{movieDetails.overview}</h2>
                  <h3 className="text-xl sm:text-base"><FaStar /> {movieDetails.vote_average}</h3>
                </div>
              </div>
            </div>
          </Card>
        </div>
      }
    </>
  )
}

export default Details