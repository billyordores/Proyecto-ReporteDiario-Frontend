import React from "react"
import { useEffect , useState } from "react"
import { GetAulas } from "../helpers/GetAulas"


const FilteredClassroom = ({planta}) =>{
    const [state, setState] = useState({
        abierto: false,
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
                    <>
                    <h2>{element.nombre}</h2>
                    <label>{element.tipo_objeto}</label>
                    </>
                    )
            })}
        </>
    )
}

export default FilteredClassroom;

/*
FILTRAR INVENTARIO

<label>{element.tipo_objeto}</label>
*/