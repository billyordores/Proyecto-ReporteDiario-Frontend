import React  from 'react';
import Navbar from '../components/Navbar'
import '../css/Home.css'

/**ESTE ES EL ENCABEZDO DE LA PAGINA */

const Home = () => {

    return(
        <>
            <div>
                <Navbar/>
                <p>Esta es una pagina creada por Billy Ordores, Madeline Trejos y Juan Ixcopal
                    becarios del departamento de Intervensión Ágil pendiente a nuevos participantes del proyecto :D
                </p>
            </div>
        </>
        )
}

export default Home;