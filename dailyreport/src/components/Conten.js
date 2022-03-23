import React, { useState } from 'react';
import '../css/Conten.css'
import Data from '../helpers/data.json';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const Conten = () =>{
    const [dropdown, setDropdown]=useState(false);

    const [dropdown2, setDropdown2]=useState(false);

    const OpenCloseDropdown=()=>{
        setDropdown(!dropdown);
    }

    const OpenCloseDropdown2=()=>{
        setDropdown2(!dropdown2);
    }

        return(
            <div className="Conten">
                <Dropdown isOpen={dropdown} toggle={OpenCloseDropdown} className='DropdownPlant0'>
                    <DropdownToggle caret className='btnPlant0'>
                        Planta 0
                    </DropdownToggle>

                    <DropdownMenu>
                        {Data.map(aulas=>{
                        return(
                            <DropdownItem>{aulas.nombre}</DropdownItem>
                        )
                        })}
                    </DropdownMenu>
                </Dropdown>

                <Dropdown isOpen={dropdown2} toggle={OpenCloseDropdown2} className='DropdownPlant-1'>
                    <DropdownToggle caret className='btnPlant-1'>
                        Planta -1
                    </DropdownToggle>

                    <DropdownMenu>
                    <DropdownItem>prueba</DropdownItem>
                       
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
}

export default Conten;


/*
<div key={aulas.id}>  
                        <div className='NameClassroom'><h4>{aulas.nombre}</h4></div>
                            <div className='NameObjectClassroom'>
                                {aulas.objetos.map(objeto=> 
                                    <div className='Checkbox'>
                                        <input type='checkbox'/>
                                        <label className='ObjectLabel'>{objeto}</label>
                                    </div>
                                )}
                            </div>
                        </div>
*/

/*
<p>Hola, aqui van las plantas</p>
                {Data.map(aulas=>{
                    return(
                        <div key={aulas.id}>  
                        <div className='NameClassroom'><h4>{aulas.nombre}</h4></div>
                            <div className='NameObjectClassroom'>
                                {aulas.objetos.map(objeto=> 
                                    <div className='Checkbox'>
                                        <input type='checkbox'/>
                                        <label className='ObjectLabel'>{objeto}</label>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
*/


/**
 * {Data.map(aulas=>{
                    return(
                        <div key={aulas.id}>
                        <h4>{aulas.nombre}</h4>
                        <p>{aulas.objetos}</p>
                        </div>
                    )
                })}
 */