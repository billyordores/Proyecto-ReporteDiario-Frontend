import React, {useState} from "react";
import '../css/ModalPrueba.css';
import VentanaModal from '../components/VentanaModal.js'

const ModalPrueba = () =>{
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [estadoModal2, cambiarEstadoModal2] = useState(false);

    return(
        <div>
            <div className='ContenedorBotones'>
                <button className="Boton" onClick={() => cambiarEstadoModal1(!estadoModal1)} >Modal 1</button> {/*Modal 1 */}
                <button className="Boton" onClick={() => cambiarEstadoModal2(!estadoModal2)} >Modal 2</button> {/*Modal 2 */}
                <button className="Boton" onClick={() => cambiarEstadoModal2(!estadoModal2)} >Modal 2</button> {/*Modal 2 */}
                <button className="Boton" onClick={() => cambiarEstadoModal2(!estadoModal2)} >Modal 2</button> {/*Modal 2 */}
                <button className="Boton" onClick={() => cambiarEstadoModal2(!estadoModal2)} >Modal 2</button> {/*Modal 2 */}
                <button className="Boton" onClick={() => cambiarEstadoModal2(!estadoModal2)} >Modal 2</button> {/*Modal 2 */}
                <button className="Boton" onClick={() => cambiarEstadoModal2(!estadoModal2)} >Modal 2</button> {/*Modal 2 */}
                <button className="Boton" onClick={() => cambiarEstadoModal2(!estadoModal2)} >Modal 2</button> {/*Modal 2 */}
                <button className="Boton" onClick={() => cambiarEstadoModal2(!estadoModal2)} >Modal 2</button> {/*Modal 2 */}
                <button className="Boton" onClick={() => cambiarEstadoModal2(!estadoModal2)} >Modal 2</button> {/*Modal 2 */}
            </div>

            {/*MODAL  1*/}
            <VentanaModal
                estado = {estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
                titulo='Nombre de aula!'
            >
                <div className="Contenido">
                    <h1>Inventario 1</h1>
                    <h3>Aqui va el inventario 1</h3>
                    <button className="Boton">Guardar Cambios</button>
                </div>
            </VentanaModal>


            {/*MODAL 2*/}
            <VentanaModal
                estado = {estadoModal2}
                cambiarEstado={cambiarEstadoModal2}
                titulo='Name Classroom'
            >
                <div className="Contenido">
                    <h1>Inventario 2</h1>
                    <h3>Aqui va el inventario 2</h3>
                    <button className="Boton">Guardar Cambios</button>
                </div>
            </VentanaModal>

        </div>
    )
}

export default ModalPrueba;