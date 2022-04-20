import React from 'react';
import '../css/BtnFlats.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryFlat from './CategoryFlat';
import FilteredClassroom from './FilteredClassroom';

const BtnPlants = () =>{
        return(
            <div className='Content'>
                <div className='Floors'>

                    <CategoryFlat name='Planta 1' items={[
                        <div className='classroomTables'>
                            <div className='ToCheck'>
                                <div className='TitleToCheck'>
                                    <a>POR REVISAR</a>
                                </div>
                                <FilteredClassroom planta={"1"}/>
                            </div>
                                <div className='Checked'>
                                    <div className='TitleChecked'>
                                        <a>REVISADAS</a>
                                    </div>
                                </div>
                        </div>
                    ]} />
                    

                    <CategoryFlat name='Planta 0' items={[
                        <div className='classroomTables'>
                            <div className='ToCheck'>
                                <div className='TitleToCheck'>
                                    <a>POR REVISAR</a>
                                </div>
                                <FilteredClassroom planta={"0"}/>
                            </div>
                                <div className='Checked'>
                                    <div className='TitleChecked'>
                                        <a>REVISADAS</a>
                                    </div>
                                </div>
                        </div>
                    ]} />
                    

                    <CategoryFlat name='Planta -1' items={[
                        <div className='classroomTables'>
                            <div className='ToCheck'>
                                <div className='TitleToCheck'>
                                    <a>POR REVISAR</a>
                                </div>
                                <FilteredClassroom planta={"-1"}/>
                            </div>
                                <div className='Checked'>
                                    <div className='TitleChecked'>
                                        <a>REVISADAS</a>
                                    </div>
                                </div>
                        </div>
                    ]} />
                    

                    <CategoryFlat name='Planta -2' items={[
                        <div className='classroomTables'>
                            <div className='ToCheck'>
                                <div className='TitleToCheck'>
                                    <a>POR REVISAR</a>
                                </div>
                                <FilteredClassroom planta={"-2"}/>
                            </div>
                                <div className='Checked'>
                                    <div className='TitleChecked'>
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