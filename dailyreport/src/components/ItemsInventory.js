import React, { Component } from 'react'
import Navbar from './Navbar'
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