import Chromebooks from './pages/Chromebooks.js'
import Flats from './pages/Flats.js'
import Inventory from './pages/Inventory.js'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>

        
        <Route path='/chromebooks' element={<Chromebooks/>} />

        <Route path='/plantas' element={<Flats/>} />
    
        <Route path='/inventario' element={<Inventory/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;