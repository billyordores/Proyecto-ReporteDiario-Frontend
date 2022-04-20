import React from "react"
import { useEffect , useState } from "react"
import { GetAulas } from "../helpers/GetAulas"
import CategoryFlat from "./CategoryFlat"
import '../css/FilteredClassroom.css'

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
    
    
    
    return (
        <>
        {state.data.map((element)=>{
        
        return(
            <div className="ClassroomButton" key={element.id_aula}>
                    <CategoryFlat name={element.nombre} items={[
                        <>
                            <input type='checkbox' value={element.tipo_objeto} className="checkbox"  /*name={element.tipo_objeto} id={element.id_aula} class='valores'*/ />
                            <label>{element.tipo_objeto}</label>
                        </>
                    ]}/>
                </div>
            )
        })}       
    </>)
}
export default FilteredClassroom;