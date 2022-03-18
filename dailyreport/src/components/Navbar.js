import React, { Component } from 'react';
import '../css/Navbar.css'

class Navbar extends Component{
    render(){
        return(
            <div className="Header">
                <img className='Logo' src={process.env.PUBLIC_URL + 'Logo_EIA.png'} />
                <h1 className="Title">Plataforma de Gestión para Mantenimiento Aulas</h1>
            </div>
        )
    }
}

export default Navbar;