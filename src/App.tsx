import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Details from './routes/Details' 
import Menu from './components/Menu'

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
