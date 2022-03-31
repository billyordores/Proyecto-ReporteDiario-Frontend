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
    
    return (<>
        {state.data.map((element)=>{
            return(
                <div className="BtnClassroom" key={element.id_aula}>
                    <CategoryFlat name={element.nombre} items={[
                        <>
                            <input type='checkbox' className="checkbox" />
                            <label>{element.tipo_objeto}</label>
                        </>
                        //<p className="hola">{element.tipo_objeto}</p>
                    ]}/>
                </div>
            )
        })}       
    </>)
}
export default FilteredClassroom

/*
<div className="BtnClassroom" key={element.id_aula}>
    <CategoryFlat name={element.nombre} items={[
        <form>
            <div className="CheckboxObjetos">
                <label for='objetos'>{element.tipo_objeto}</label>
                <input type='checkbox' value={element.id_aula_inventario} name={element.id_aula_inventario} id={element.id_aula_inventario}/>
            </div>
        </form>
                        ]}/>
</div>
*/

/*
<form>
    <p>
        <label for='objetos' >{element.nombre}</label>
        <input type='checkbox' value='objetos' name='objetos' />
    </p>
</form>
*/

/*
<div className="BtnClassroom" key={element.id_aula}>
    <CategoryFlat name={element.nombre} items={[
        <p>{element.tipo_objeto}</p>
    ]}/>
</div>
*/

