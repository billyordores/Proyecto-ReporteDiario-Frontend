import React, { useEffect , useState } from "react"
import { GetAulas } from "../helpers/GetAulas"
import ModalComponent from "./modal"
import '../css/FiltClassroom.css'

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
                        <div className='ContButton'>
                            <button className="Boton" onClick={() => toggle({element})} >{element.nombre}</button> {/*Modal 1 */}
                        </div>
                )
            })}
        </>
    )
}

export default FilteredClassroom;