import { Menubar } from 'primereact/menubar'
import { InputText } from 'primereact/inputtext'
import { MenuItem } from 'primereact/menuitem'  


function Menu() {
  
  const items: MenuItem[] = [
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Contact',
        icon: 'pi pi-users'
    }
  ]

  const start = <h1>Mega Filmes</h1>
  const end = (
    <div className="flex align-items-center gap-2">
        <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
    </div>
  )

  return (
    <div className="card">
        <Menubar model={items} start={start} end={end} />
    </div>
  )
}

export default Menu