import { InputText } from 'primereact/inputtext'
import { MenuItem } from 'primereact/menuitem'
import { useNavigate } from 'react-router-dom'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'

function Main_Menu() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const items: MenuItem[] = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        url: '/'
    },
    {
        label: 'Contact',
        icon: 'pi pi-users'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if(!search) return

    navigate(`/search/?q=${search}`)
    
    setSearch('')
  }

  const start = <h1 className='md:block hidden '>Movies</h1>
  const end = (
    <div className="flex align-items-center gap-2">
      <form onSubmit={handleSubmit}>
        <InputText
          placeholder="Search"
          type="text"
          onChange={(e: any) => setSearch(e.target.value)}
          className="w-6rem sm:w-auto"
        />
        <Button
          type="submit"
          icon="pi pi-search"
          className="p-button-outlined"
          style={{ marginLeft: '10px' }}
        >
          <FaSearch />
        </Button>
      </form>

    </div>
  )

  return (
    <div className="card fixed top-0 left-0 right-0 z-1">
        <Menubar className='h-4rem' model={items} start={start} end={end} />
    </div>
  )
}

export default Main_Menu