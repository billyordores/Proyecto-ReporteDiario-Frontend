import './css/App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home.js'
import Plantas from './pages/Plantas.js'
import Conten from './components/Conten'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return(
    <BrowserRouter>
    
      <Routes>
        <Route path='/home' element={
          <Home/>
        } />

        <Route path='/plantas' element={
          <Plantas/>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;