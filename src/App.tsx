import Main_Menu from './components/Main_Menu/Main_Menu'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Main_Menu />
      <div className='mt-8'>
        <Outlet />
      </div>
    </>
  )
}

export default App
