import React from 'react';
import './css/App.css'

function App() {
  return (
    <header className="Header">
      <img className='Logo' src={process.env.PUBLIC_URL + 'Logo_EIA.png'} />
      <h1 className="Title">Plataforma de Gestión para Mantenimiento Aulas</h1>
    </header>
  );
}

export default App;
