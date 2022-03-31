import React from 'react'
import Navbar from '../components/Navbar'
import '../css/Inventory.css'
import CategoryInventory from '../components/CategoryInventory'

const Inventory = () =>{
        return(
            <div>
                <div className='pagesInventory'>
                  <h4>Inventario de Aulas</h4>
                </div>
                <CategoryInventory objeto=" Planta #1" items={['aula #1.1','aula #1.10','aula #1.2','aula #1.3','aula #1.4','aula #1.5','aula #1.6','aula #1.7','aula #1.8','aula #1.9']}/>
                <CategoryInventory objeto=" Planta #0" items={['aula #0.2','aula #0.4','aula #0.6','aula #0.8','aula #0.10','aula #0.12']}/>
                <CategoryInventory objeto=" Planta #-1" items={['aula #-1.1','aula #-1.10','aula #-1.12','aula #-1.13','aula #-1.14','aula #-1.15','aula #1.2','aula #1.3','aula #1.5','aula #1.5','aula #1.6','aula #1.7','aula #1.8','aula #1.9']}/>
                <CategoryInventory objeto=" Planta #-2" items={['aula #0.2','aula #0.4','aula #0.6','aula #0.8','aula #0.10','aula #0.12']}/>

            </div>
        )
}

export default Inventory;