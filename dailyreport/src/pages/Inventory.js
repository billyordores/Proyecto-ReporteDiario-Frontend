import React from 'react'
import '../css/Inventory.css'
import TableInventory from '../components/TableInventory'
import { GetObjectInvetory } from '../helpers/GetObjectInventory'

const Inventory = () =>{
        return(
            <div>
                <div className='pagesInventory'>
                  <h4>Inventario de Aulas</h4>
                </div>
                <TableInventory/>
            </div>
        )
}

export default Inventory;