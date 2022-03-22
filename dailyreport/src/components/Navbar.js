import React, { Component } from 'react';
import '../css/Navbar.css'

/**ESTE ES EL ENCABEZDO DE LA PAGINA */

class Navbar extends Component{
    render(){
        return(
            <div>
                <div className="Header">
                    <img className='Logo' src={process.env.PUBLIC_URL + 'Logo_EIA.png'} />
                    <h1 className="Title">Plataforma de Gestión para Mantenimiento Aulas</h1>
                </div>

                <div className='routesPage'>
                    <a href='/home'>Home</a>
                    <a href='/plantas'>Plantas</a>
                    <a href='*'>Otros</a>
                </div>
            </div>
        )
    }
}

export default Navbar;