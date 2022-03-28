import React, {useState} from 'react';
import '../css/BtnPlants.css'
import Data from '../helpers/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from '../components/Category';


const BtnPlants = () =>{
        return(
            <div className="Conten">
                <div className='Buttons'>

                    <Category name='Planta 1' items={[
                        <div className='Dates'>
                            <div className='To_check'>
                                <div className='Por_revisar'>
                                    <a>POR REVISAR</a>
                                </div>
                            </div>
                                <div className='Check'>
                                    <div className='Revisadas'>
                                        <a>REVISADAS</a>
                                    </div>
                                </div>
                        </div>
                    ]} />
                    

                    <Category name='Planta 0' items={[
                        <div className='Dates'>
                            <div className='To_check'>
                                <div className='Por_revisar'>
                                    <a>POR REVISAR</a>
                                </div>
                                {Data.map(aulas=>{
                                return(
                                    <div key={aulas.id}>
                                        <h4>{aulas.nombre}</h4>
                                    </div>
                                )
                            })}
                            </div>
                                <div className='Check'>
                                    <div className='Revisadas'>
                                        <a>REVISADAS</a>
                                    </div>
                                    {Data.map(aulas=>{
                                return(
                                    <div key={aulas.id}>
                                        <h4>{aulas.nombre}</h4>
                                    </div>
                                )
                            })}
                                </div>
                        </div>
                    ]} />
                    

                    <Category name='Planta -1' items={[
                        <div className='Dates'>
                            <div className='To_check'>
                                <div className='Por_revisar'>
                                    <a>POR REVISAR</a>
                                </div>
                            </div>
                                <div className='Check'>
                                    <div className='Revisadas'>
                                        <a>REVISADAS</a>
                                    </div>
                                </div>
                        </div>
                    ]} />
                    

                    <Category name='Planta -2' items={[
                        <div className='Dates'>
                            <div className='To_check'>
                                <div className='Por_revisar'>
                                    <a>POR REVISAR</a>
                                </div>
                            </div>
                                <div className='Check'>
                                    <div className='Revisadas'>
                                        <a>REVISADAS</a>
                                    </div>
                                </div>
                        </div>
                    ]} />
                </div>
            </div>
        )
}

export default BtnPlants;


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