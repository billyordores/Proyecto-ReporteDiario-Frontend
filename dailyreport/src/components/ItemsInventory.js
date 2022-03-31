import React from 'react'
import '../css/Inventory.css'

const ItemsInventory =(  props  )=>{
     
  return(
     <div className='itemsInventory'>
         <li>
          <a href='1'>{props.name}</a>
         </li>
     </div>
  );
     
}

export default ItemsInventory;