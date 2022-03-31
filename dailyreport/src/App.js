import './css/App.css'
import Home from './pages/Home.js'
import Flats from './pages/Flats.js'
import Inventory from './pages/Inventory.js'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>

        
        <Route path='/home' element={<Home/>} />

        <Route path='/plantas' element={<Flats/>} />

        <Route path='/inventario' element={<Inventory/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;