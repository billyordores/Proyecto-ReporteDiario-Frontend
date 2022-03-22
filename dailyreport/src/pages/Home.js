import React  from 'react';
import Navbar from '../components/Navbar'
import '../css/Home.css'

/**ESTE ES EL ENCABEZDO DE LA PAGINA */

const Home = () => {

    return(
        <>
            <div>
                <Navbar/>
                <p>Hola, este es el Home</p>
            </div>
        </>
        )
}

export default Home;