import Chromebooks from './pages/Chromebooks.js'
import Flats from './pages/Flats.js'
import Inventory from './pages/Inventory.js'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login.js'

function App() {
  return(
    <BrowserRouter>
    <Login>
      <Navbar/>
        <Routes>
          <Route path='/chromebooks' element={<Chromebooks/>} />

          <Route path='/plantas' element={<Flats/>} />
        
          <Route path='/inventario' element={<Inventory/>} />
        </Routes>
    </Login>
    </BrowserRouter>
  )
}

export default App;