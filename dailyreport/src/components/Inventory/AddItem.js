import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap"
import {InputLabel, FormControl , MenuItem} from "@mui/material"
import Select from "react-select"
import { GetClassrooms } from "../../helpers/GetClassrooms.js";
import { GetTools } from "../../helpers/GetTools.js";
import makeAnimated from 'react-select/animated';
const AddItem =()=>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const animatedComponents = makeAnimated();
    const [rooms , setRooms] = useState([{}]);
    const [tools, setTools] = useState([{}]);
    const [roomSelected, setRoomSelected] = useState([]);
    const [toolSelected, setToolSelected] = useState([]); 


    useEffect(()=>{
        GetClassrooms().then((response)=>{
            setRooms(response.map((element)=> ({ value: element.Aula_id, label: element.Planta+"."+element.Numero })))
        });
        GetTools().then((response)=>{
            setTools(response.map((element)=>({value:element.Herramienta_id , label: element.Nombre})))
        })
    }, [])

    const handleSaveChanges = () =>{

    }

    return(
        <>
            <button className='btn btn-secondary' onClick={handleShow}>Agregar Item</button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header >
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>               
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <h3>Aula</h3>
                    <Select closeMenuOnSelect={true} onChange={(event)=> setRoomSelected(event.value)} components={animatedComponents} options={rooms}  >
                    </Select>
                    <h3>Herramientas</h3>
                    <Select closeMenuOnSelect={false} isMulti onChange={(event)=>setToolSelected(event)} components={animatedComponents} options={tools}/>                 
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                <button className='btn btn-secondary' onClick={handleClose}>
                    Close
                </button>
            <button className='btn btn-secondary' onClick={handleClose}>
                Save Changes
            </button>
            </Modal.Footer>
            </Modal>
            {console.log(roomSelected)}
        </>
        
    )
}
export default AddItem;