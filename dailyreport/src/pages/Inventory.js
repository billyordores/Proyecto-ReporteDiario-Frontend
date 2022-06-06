import React from 'react'
import '../css/Inventory.css'
import { GetObjectInvetory } from '../helpers/GetObjectInventory'
import { useState } from 'react'
import ModalInventoryAulas from '../components/modal/ModalInventoryAulas'

const Inventory = () =>{
    const [modalShow, setModalShow] = useState(false);
        return(
            <div>
                <div className='pagesInventory'>
                  <h2>Inventario de Aulas</h2>
                </div>
                <div class="addAulas">
                    <button class="buttonAddAulas" type="submit" onClick={() => setModalShow(true)}> +Aulas </button>
                    <ModalInventoryAulas show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
        )
}

export default Inventory;