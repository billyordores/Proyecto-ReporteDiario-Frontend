import './css/App.css'
import Home from './pages/Home.js'
import Plantas from './pages/Plantas.js'
import Inventario from './pages/Inventario.js'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return(
    <BrowserRouter>
    
      <Routes>

        <Route path='/home' element={<Home/>} />

        <Route path='/plantas' element={<Plantas/>} />

        <Route path='/inventario' element={<Inventario/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;