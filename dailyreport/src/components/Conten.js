import React, { Component, useState } from 'react';
import '../css/Conten.css'
import Data from '../helpers/data.json';

class Conten extends Component{
    render(){
        return(
            <div className="Conten">
                <p>Aqui iran las plantas</p>
            </div>
        )
    }
}

export default Conten;

/**
 * <button className='Plant1' >Planta 1</button>
                <button className='Plant0' >Planta 0</button>
                <button className='Plant-1' >Planta -1</button>
                <button className='Plant-2' >Planta -2</button>
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