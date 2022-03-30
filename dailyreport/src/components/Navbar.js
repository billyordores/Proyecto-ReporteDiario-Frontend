import React from 'react';
import '../css/Navbar.css'
import { Link } from 'react-router-dom';

/**ESTE ES EL ENCABEZDO DE LA PAGINA */

const Navbar = () =>{
        return(
            <div>
                <div className="Header">
                    <img className='Logo' src={process.env.PUBLIC_URL + 'Logo_EIA.png'} />
                    <h1 className="Title">Plataforma de Gestión para Mantenimiento Aulas</h1>
                </div>

                <div className='routesPage'>
                    <Link to='/home'>Home</Link>
                    <Link to='/plantas'>Plantas</Link>
                    <Link to='/inventario'>Inventario</Link>     
                </div>
            </div>
        )
}

export default Navbar;