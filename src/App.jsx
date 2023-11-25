import './App.css'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'

import NavBar from './components/navbar/NavBar'
import SideBar from './components/SideBar'
import DashBoard from './pages/dashboard/DashBoard'
import Perks from './pages/perks/Perks'

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <div className='admin_section'>
      <SideBar/>
        <Routes>
          <Route path='/' element={<Navigate to={'/dashboard'}  element={<DashBoard/>}/>} />
          <Route path='/dashboard' element={<DashBoard/>} />
          <Route path='/perks' element={<Perks/>}/>
          
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
