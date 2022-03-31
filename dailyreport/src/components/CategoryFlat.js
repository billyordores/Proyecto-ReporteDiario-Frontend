import React, { useState } from "react";
import MenuItemFlat from "./MenuItemFlat";
import '../css/CategoryFlat.css'

const CategoryFlat = (props) =>{
    const [state, setState] = useState({
        visible:false
    })
    const handleClick = () =>{
        setState({
            visible:!state.visible
        })

    }
    return(
        <div>
                <li>
                    <h3 onClick={handleClick} >{props.name}</h3>
                    <ul className={state.visible? 'visible': 'no-visible'} >
                        {props.items.map((item)=>{
                            return <MenuItemFlat name={item} key={item} />
                        })}
                    </ul>
                </li>
            </div>
    )
}

export default CategoryFlat;