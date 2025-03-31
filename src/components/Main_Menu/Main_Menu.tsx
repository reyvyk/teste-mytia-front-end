import { use, useState } from 'react'
import { Menubar } from 'primereact/menubar'
import { InputText } from 'primereact/inputtext'
import { MenuItem } from 'primereact/menuitem'
import { Button } from 'primereact/button'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


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

  const start = <h1>Mega Filmes</h1>
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
    <div className="card">
        <Menubar model={items} start={start} end={end} />
    </div>
  )
}

export default Main_Menu