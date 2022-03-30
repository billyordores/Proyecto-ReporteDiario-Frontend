import React from "react"
import { useEffect , useState } from "react"
import { GetAulas } from "../helpers/GetAulas"
const FilteredClassroom = ({planta}) =>{
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
    
    return (<>
        {state.data.map((element)=>{
            return <div key={element.id_aula}>{element.nombre}</div>
        })}        
    </>)
}
export default FilteredClassroom