import React from "react"
import VentanaModal from './VentanaModal'
import '../css/FiltClassroom.css'

const ModalComponent = ({cambiarEstadoModal1, estadoModal1, dataModal}) =>{

    console.log("DATA DIMANICA  ",dataModal);
    const {nombre , tipo_objeto } = dataModal

    return (
        <>
            <VentanaModal
                estado = {estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
                titulo= { 'Aula ' + nombre}
            >
                <div className="Contenido">
                    <h3>{tipo_objeto}</h3>
                    <button className="Boton">Guardar Cambios</button>
                </div>
            </VentanaModal>
        </>
    )
}

export default ModalComponent;