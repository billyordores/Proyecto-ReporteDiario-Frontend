import React, { Component } from 'react';
import '../css/Navbar.css'
import { Link } from 'react-router-dom';

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
                    <a><Link to='/'>Home</Link></a>
                    <Link to='/plantas'>Plantas</Link>
                    <Link to='/inventario'>Inventario</Link>     
                </div>
            </div>
        )
    }
}

export default Navbar;