import NavbarComponent from '../navbar'
import CardComponent from './card'
import SidebarComponent from './sidebar'

export default function Dashboard() {
  return (
    <div>
      <div className='text-2xl font-semibold p-10'>
        Dashboard
      </div>
      <div className='flex'>
        <SidebarComponent />
        <CardComponent />
      </div>
    </div>
  )
}
