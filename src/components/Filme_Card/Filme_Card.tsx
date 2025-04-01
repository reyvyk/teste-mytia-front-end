import { Button } from "primereact/button"
import { FaStar } from "react-icons/fa";
import { Card } from "primereact/card"

import { useNavigate } from "react-router-dom";
import "./Filme_Card.css"

const Filme_Card = ({movie, showLink = true}: any) => {
  const filmesIMG = import.meta.env.VITE_API_IMG
  const navigate = useNavigate()

  const handleDetails = () => {
    if(!showLink) return
    navigate(`/details/${movie.id}`)
  }

  const header = (
    <img src={filmesIMG+movie.poster_path} alt={movie.title} />
  )

  const footer = (
    <>
      <Button
        className="w-full"
        label="Datails"
        icon="pi pi-check"
        onClick={handleDetails}  
      />
    </>
  )
  
  return (
    <Card title={movie.title} footer={footer} header={header} className="md:w-15rem m-2">
      <span className="text-900 font-semibold">
        <FaStar /> {movie.vote_average}
      </span>
    </Card>
  )
}

export default Filme_Card