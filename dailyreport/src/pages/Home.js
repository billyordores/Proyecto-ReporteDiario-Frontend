import React  from 'react';
import Navbar from '../components/Navbar'
import '../css/Home.css'

/**ESTE ES EL ENCABEZDO DE LA PAGINA */

const Home = () => {

    return(
        <>
            <div>
                <Navbar/>
                <p>Este es el home</p>
            </div>
        </>
        )
}

export default Home;