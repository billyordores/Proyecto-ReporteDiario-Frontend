import React from 'react'
import '../css/Inventory.css'
import TableInventory from '../components/TableInventory'
import { GetObjectInvetory } from '../helpers/GetObjectInventory'
import { useState } from 'react'
import ModalInventoryAulas from '../components/modal/ModalInventoryAulas'

const Inventory = () =>{
    const [modalShow, setModalShow] = useState(false);
        return(
            <div>
                <div className='pagesInventory'>
                  <h4>Inventario de Aulas</h4>
                </div>
                <div class="addAulas">
                    <button class="buttonAddAulas" type="submit" onClick={() => setModalShow(true)}> +Aulas </button>
                    <ModalInventoryAulas show={modalShow} onHide={() => setModalShow(false)} />
                </div>              
                <TableInventory/>
            </div>
        )
}

export default Inventory;