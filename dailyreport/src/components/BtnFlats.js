import React from 'react';
import '../css/BtnFlats.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteredClassroom from './FilteredClassroom'

const BtnPlants = () =>{

        return(
            <>
                <FilteredClassroom planta={'1'} />
                <FilteredClassroom planta={'0'} />
            </>
        )
}

export default BtnPlants;