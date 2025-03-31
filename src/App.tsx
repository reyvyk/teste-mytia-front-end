import { Outlet } from 'react-router-dom'
import Main_Menu from './components/Main_Menu/Main_Menu'

function App() {
  return (
    <>
      <Main_Menu />
      <Outlet />
    </>
  )
}

export default App
