import React from "react"
import { useEffect , useState } from "react"
import { GetAulas } from "../helpers/GetAulas"
import VentanaModal from './VentanaModal'

const ModalComponent = ({cambiarEstadoModal1, estadoModal1, dataModal}) =>{

    console.log("DATA DIMANICA  ",dataModal);
    const {nombre , tipo_objeto } = dataModal

    return (
        <>
            <VentanaModal
                estado = {estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
                titulo= {nombre}
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

/*
AQUI VAN LOS BOTONES DEL NAVBAR :)

<label>{element.tipo_objeto}</label>
// <h2>{element.nombre}</h2>
<label>{element.tipo_objeto}</label> */