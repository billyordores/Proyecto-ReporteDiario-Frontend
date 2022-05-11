import React, { useEffect, useState } from "react";
import MaterialTable from '@material-table/core'
import tableIcons from "./MaterialTableIcons";
import { GetObjectInvetory } from "../helpers/GetObjectInventory";
import PutObjectInventory from "../helpers/PutObjectInventory";

const TableInventory = () =>{
    const [data, setData] = useState([]);
    const columnas =  [
        {
            title:'Id',
            field : 'id_objeto',
            type: 'numeric',
            cellStyle: {
                textAlign: "right"
            }
        },
        {
            title:'Nombre',
            field : 'tipo_objeto'
        }
    ];

    const [object, setObject] = useState([]);
    useEffect(()=>{
        GetObjectInvetory().then(response =>{
            setObject(response)   
        })
    }, [setObject])

    const handleRowUpdate=(newData, oldData, resolve)=>{
        PutObjectInventory(newData.tipo_objeto).then(response =>{
            console.log(response)  
        })
        resolve();
    }
    const handleRowAdd =()=>{
        console.log("Esta es la add")
    }
    const handleRowDelete =()=>{
        console.log("Esta es la delete")
    }

    return(
        <div className="Inventory-MaterialTable">            
            <MaterialTable
                columns={columnas} 
                data={object} 
                title= "Inventario de Materiales Uneatlantico" 
                
                editable={{
                    onRowUpdate: (newData, oldData) =>
                      new Promise((resolve) => {
                        setTimeout(() => {
                            handleRowUpdate(newData, oldData, resolve)                          
                        }, 1000);          
                      }),
                    onRowAdd: (newData) =>
                      new Promise((resolve) => {
                        handleRowAdd(newData, resolve)
                      }),
                    onRowDelete: (oldData) =>
                      new Promise((resolve) => {
                        handleRowDelete(oldData, resolve)
                      }),
                }}
            />        
        </div>
    )
        
    
}

export default TableInventory;