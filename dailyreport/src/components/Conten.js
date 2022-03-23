import React, { Component, useState } from 'react';
import '../css/Conten.css'
import Data from '../helpers/data.json';

const Conten = () =>{
        return(
            <div className="Conten">
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
            </div>
        )
}

export default Conten;


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






/**
import React, { Component } from 'react';
import '../css/Conten.css'
import Data from '../helpers/data.json'

class Conten extends Component{
    render(){
        return(
            <div className="Conten">
                {Data.map(aulas=>{
                    return(
                        <div key={aulas.id}>
                        <h4>{aulas.nombre}</h4>
                        <p>{aulas.objetos}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Conten;

 */