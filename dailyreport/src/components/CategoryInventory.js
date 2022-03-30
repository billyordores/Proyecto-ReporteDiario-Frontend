import React, { Component } from 'react'
import Navbar from './Navbar'
import '../css/Inventory.css'
import '../components/ItemsInventory'
import ItemsInventory from '../components/ItemsInventory'

const CategoryInventory =(  props  )=>{
     
  return(
     <div className='categoryInventory'>
         <li>
           <h3>{ props.objeto } </h3>
            <ul>
             {props.items.map((item, index)=>{
               return(
               <ItemsInventory name={item} key={index}/>) 
               
             })}
           </ul> 
         </li>
     </div>
  );
     
}
     
   


export default CategoryInventory;