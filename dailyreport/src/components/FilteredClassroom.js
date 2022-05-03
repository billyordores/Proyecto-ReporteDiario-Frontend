import React from "react"
import { useEffect , useState } from "react"
import { GetAulas } from "../helpers/GetAulas"
import VentanaModal from './VentanaModal'
import ModalComponent from "./modal"

const FilteredClassroom = ({planta}) =>{

    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [dataModal, setDataModal] = useState({})
    const [state, setState] = useState({
        data: [],
        loading:true
    });

    const toggle = ({ element }) => {
        cambiarEstadoModal1(!estadoModal1)
        setDataModal(element)
    }
    
    
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
            <ModalComponent cambiarEstadoModal1={cambiarEstadoModal1} estadoModal1={estadoModal1} dataModal={dataModal} />
        
            {state.data.map((element)=>{
                return(
                    <div>
                        <div className='ContenedorBotones'>
                            <button className="Boton" onClick={() => toggle({element})} >{element.nombre}</button> {/*Modal 1 */}
                        </div>

                        
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