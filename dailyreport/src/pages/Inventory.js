import React from 'react'
import '../css/Inventory.css'
import TableInventory from '../components/TableInventory'
import { GetObjectInvetory } from '../helpers/GetObjectInventory'

const Inventory = () =>{
        return(
            <div>
                <div className='pagesInventory'>
                  <h2>Inventario de Aulas</h2>
                </div>
                <TableInventory/>
            </div>
        )
}

export default Inventory;