import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap"
import { FormControl, Alert } from "@mui/material"
import Select from "react-select"
import { GetClassrooms } from "../../helpers/GetClassrooms.js";
import { GetTools } from "../../helpers/GetTools.js";
import { GetComputers } from "../../helpers/GetComputers.js";
import { PostComputerRoom } from "../../helpers/PostComputerRoom.js";
import makeAnimated from 'react-select/animated';
const AddItem =()=>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const animatedComponents = makeAnimated();

    const [rooms , setRooms] = useState([{}]);
    const [roomSelected, setRoomSelected] = useState(null);    

    const [computers , setComputers] = useState([]);
    const [computerSelected, setComputerSelected] = useState(null);

    const [tools, setTools] = useState([{}]);
    const [toolSelected, setToolSelected] = useState(null);

    useEffect(()=>{
        GetClassrooms().then((response)=>{
            setRooms(response.map((element)=> ({ value: element.Aula_id, label: element.Planta+"."+element.Numero })))
        });
        GetTools().then((response)=>{
            setTools(response.map((element)=>({value:element.Herramienta_id , label: element.Nombre})))
        })
        GetComputers().then((response)=>{
            setComputers(response.map((element)=>({value:element.Ordenador_id , label: element.Nombre})))
        })
    }, [])

    const handleSaveChanges = () =>{
        try{
            PostComputerRoom(roomSelected.value , computerSelected.value , toolSelected)
            setRoomSelected(null)
            setComputerSelected(null)
            setToolSelected(null)
            alert("Succesful")
            
        }catch(e){
            alert("Error")
        }      
    }

    return(
        <>
            <button className='btn btn-secondary' onClick={handleShow}>Agregar Item</button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header >
                    <Modal.Title>Añadir Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>               
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <h3>Aula</h3>
                        <Select value={roomSelected} closeMenuOnSelect={true} onChange={(event)=>setRoomSelected({value : event.value, label: event.label})} components={animatedComponents} options={rooms}  />                                    
                        <h3>Ordenador</h3>
                        <Select value={computerSelected} closeMenuOnSelect={true} onChange={(event)=>setComputerSelected({value : event.value, label: event.label})} components={animatedComponents} options={computers}/>                    
                        <h3>Herramientas</h3>
                        <Select value={toolSelected} closeMenuOnSelect={false} isMulti onChange={(event)=> setToolSelected(event)} components={animatedComponents} options={tools}/> 
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                <button className='btn btn-secondary' onClick={handleClose}>
                    Close
                </button>
                <button className='btn btn-secondary' onClick={handleSaveChanges}>
                    Save Changes                    
                </button>
            </Modal.Footer>
            </Modal>
        </>
        
    )
}
export default AddItem;