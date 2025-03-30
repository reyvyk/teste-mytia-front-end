import { Card } from "primereact/card"
import { Button } from "primereact/button"
import { FaStar } from "react-icons/fa";

import "./Filme_Card.css"

const filmesIMG = import.meta.env.VITE_API_IMG;

const Filme_Card = ({filme, showLink = true}: any) => {

  const header = (
    <img src={filmesIMG + filme.poster_path} alt={filme.title} />
  );
  const footer = (
    <>
        <Button label="Datails" icon="pi pi-check" />
    </>
  )
  
  return (

    <Card title={filme.title} footer={footer} header={header} className="md:w-20rem m-2">
      <FaStar /> {filme.vote_average}
    </Card>
  
  )
}

export default Filme_Card