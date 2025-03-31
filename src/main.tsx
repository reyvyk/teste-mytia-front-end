import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
//CSS 
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css"
import "../node_modules/primeflex/primeflex.css"
//Components Page
import Search_Filmes from './pages/Search_Filmes.tsx'
import Details from './pages/Details.tsx'
import Home from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="details/:id" element={<Details />} />
            <Route path="search" element={<Search_Filmes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  </StrictMode>,
)
