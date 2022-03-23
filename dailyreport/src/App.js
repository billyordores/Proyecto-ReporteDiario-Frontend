import './css/App.css'
import Home from './pages/Home.js'
import Plantas from './pages/Plantas.js'
import NotFoundPage from './pages/NotFoundPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return(
    <BrowserRouter>
    
      <Routes>

        <Route path='/' element={<Home/>} />

        <Route path='/plantas' element={<Plantas/>} />

        <Route path='*' element={<NotFoundPage/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;