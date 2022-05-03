import React from "react"
import { useEffect , useState } from "react"
import { GetAulas } from "../helpers/GetAulas"
import VentanaModal from './VentanaModal'

const FilteredClassroom = ({planta}) =>{

    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    const [state, setState] = useState({
        data: [],
        loading:true
    });
    
    useEffect(()=>{
        GetAulas().then(response =>{
            setState({
                data: response.filter((element)=> element.planta === planta),
                loading: false
            })
        })
    },[])
    
    return (
        <>
            {state.data.map((element)=>{
                return(
                    <div>
                        <div className='ContenedorBotones'>
                            <button className="Boton" onClick={() => cambiarEstadoModal1(!estadoModal1)} >{element.nombre}</button> {/*Modal 1 */}
                        </div>

                        <VentanaModal
                            estado = {estadoModal1}
                            cambiarEstado={cambiarEstadoModal1}
                            titulo={element.nombre}
                        >
                        <div className="Contenido">
                            <h3>{element.tipo_objeto}</h3>
                            <button className="Boton">Guardar Cambios</button>
                        </div>
                        </VentanaModal>
                    </div>
                )
            })}
        </>
    )
}

export default FilteredClassroom;

/*
AQUI VAN LOS BOTONES DEL NAVBAR :)

<label>{element.tipo_objeto}</label>
// <h2>{element.nombre}</h2>
<label>{element.tipo_objeto}</label> */