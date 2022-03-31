import React from 'react';
import '../css/BtnFlats.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryFlat from './CategoryFlat';
import FilteredClassroom from './FilteredClassroom';


const BtnPlants = () =>{
        return(
            <div className="Conten">
                <div className='Buttons'>

                    <CategoryFlat name='Planta 1' items={[
                        <div className='Dates'>
                            <div className='To_check'>
                                <div className='TextPor_revisar'>
                                    <a>POR REVISAR</a>
                                </div>
                                <FilteredClassroom planta={"1"}/>
                            </div>
                                <div className='Check'>
                                    <div className='TextRevisadas'>
                                        <a>REVISADAS</a>
                                    </div>
                                </div>
                        </div>
                    ]} />
                    

                    <CategoryFlat name='Planta 0' items={[
                        <div className='Dates'>
                            <div className='To_check'>
                                <div className='TextPor_revisar'>
                                    <a>POR REVISAR</a>
                                </div>
                                <FilteredClassroom planta={"0"}/>
                            </div>
                                <div className='Check'>
                                    <div className='TextRevisadas'>
                                        <a>REVISADAS</a>
                                    </div>
                                </div>
                        </div>
                    ]} />
                    

                    <CategoryFlat name='Planta -1' items={[
                        <div className='Dates'>
                            <div className='To_check'>
                                <div className='TextPor_revisar'>
                                    <a>POR REVISAR</a>
                                </div>
                                <FilteredClassroom planta={"-1"}/>
                            </div>
                                <div className='Check'>
                                    <div className='TextRevisadas'>
                                        <a>REVISADAS</a>
                                    </div>
                                </div>
                        </div>
                    ]} />
                    

                    <CategoryFlat name='Planta -2' items={[
                        <div className='Dates'>
                            <div className='To_check'>
                                <div className='TextPor_revisar'>
                                    <a>POR REVISAR</a>
                                </div>
                                <FilteredClassroom planta={"-2"}/>
                            </div>
                                <div className='Check'>
                                    <div className='TextRevisadas'>
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
        {filteredData.map((value,index)=>{
            return(
                <div key={value.id}>
                    <div style={styles}>
                        {value.title}
                    </div>
                </div>
            )
        })}
*/



/*
 {Data.map(aulas=>{
        return(
            <div key={aulas.id}>
                <h4>{aulas.nombre}</h4>
                <p>{aulas.objetos}</p>
            </div>
        )
    })}
 */

/**
 {data.map((element)=>{
                                    return(
                                        <div key={element.id_aula}>
                                            <h4>{element.nombre}</h4>
                                        </div>
                                    )
                                })}
 */