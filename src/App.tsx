import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Details from './routes/Details'
import { Button } from 'primereact/button'; 

function App() {
  return (
    <>
      <h1>Mega Filmes</h1>
      <Button label="Click Me" icon="pi pi-check" className="p-button-success" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
