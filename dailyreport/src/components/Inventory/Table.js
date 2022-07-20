import { element } from "prop-types";
import React, { useEffect, useState } from "react";
import { GrTrash , GrEdit } from "react-icons/gr";
import { Modal } from "react-bootstrap"
import { GetClassrooms} from "../../helpers/GetClassrooms";
import { GetComputersRooms } from "../../helpers/GetComputersRooms";
import { GetTools } from "../../helpers/GetTools";
import { DeleteComputerRoom } from "../../helpers/DeleteComputerRoom";
import { GetComputers } from "../../helpers/GetComputers";
import { FormControl } from "@mui/material"
import Select from "react-select"
import makeAnimated from 'react-select/animated';
import { PutComputerRoom } from "../../helpers/PutComputerRoom";


const Table =()=>{
  const [rooms, setRooms] = useState([]);
  const [show, setShow] = useState(false);
  const [computersRooms, setComputersRooms] = useState([]);
  const [computers, setComputers] = useState([])
  const [tools, setTools] = useState([])
  const animatedComponents = makeAnimated();
  const [roomSelected, setRoomSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formRoom, setFormRoom] = useState({})
  const [formComputer, setFormComputer] = useState({})
  const [formTool, setFormTool] = useState({}) 
  const [idRelation, setIdRelation] = useState()

  useEffect(()=>{
    GetClassrooms().then((response)=>{
      setRooms(response.map((element)=> ({ value: element.Aula_id, label: element.Planta+"."+element.Numero })))      
    })
    GetComputersRooms().then((resolve)=>{
      setComputersRooms(resolve)
    }).catch((error)=> console.log("Error en la promesa ComputerRoom", error))

    GetTools().then((response)=>{
      setTools(response.map((element)=> ({ value: element.Herramienta_id, label: element.Nombre })))
    })
    GetComputers().then((response)=>{
      setComputers(response.map((element)=> ({ value: element.Ordenador_id, label: element.Nombre })))
    })
    
  }, [computersRooms])
  
  const GetClassroomById = ( id ) => {      
    return rooms.find((element) =>element.value === id )       
  }
  const GetComputerById = ( id ) => {
    return computers.find((element) =>element.value === id)
  }
  const deleteItem = ( id )=>{
    var result = window.confirm("Are you sure to delete?");
      if(result){
        DeleteComputerRoom( id ).then((resolve)=>{
          console.log(resolve);
        })
      }   
  }

  const handleClose = () => setShow(false);

  const handleShow = (id_relation, room_name, room_id, computer_name, computer_id, tool_name, tool_id) => {
    setShow(true);
    setIdRelation(id_relation)
    setFormRoom({ ...formRoom, room_name: room_name, room_id:room_id})
    setFormComputer({ ...formComputer, computer_name: computer_name, computer_id:computer_id})
    setFormTool({ ...formTool, tool_name: tool_name, tool_id:tool_id})
  }
  
  const handleOnChangeRoom= (e) => {
    setFormRoom({ ...formRoom, room_name: e.label, room_id: e.value})
  }
  const handleOnChangeComputer= (e) => {
    setFormComputer({ ...formComputer, computer_name: e.label, computer_id: e.value})
  }
  const handleOnChangeTool= (e) => {
    setFormTool({ ...formTool, tool_name: e.label, tool_id: e.value})
  }

  const handleSaveChanges =()=>{
    var result = window.confirm("Are you sure to edit?");
    if(result){
      PutComputerRoom( idRelation, formRoom.room_id, formComputer.computer_id, formTool.tool_id ).then((resolve)=>{
        console.log(resolve);
      }).catch((error)=> "error in updating api")
      handleClose() 
    }

  }
  return(
        <table class="table">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Aula</th>
            <th scope="col">PC</th>
            <th scope="col">Herramienta</th>
            <th scope="col">Tipo</th>
            <th scope="col">Actions</th>
          </tr>
          {computersRooms.map((element)=>{
            const room_name  = GetClassroomById(element.Aula_id) == null? "cargandoo..": GetClassroomById(element.Aula_id).label ;
            const computer_name = GetComputerById(element.Ordenador_id) == null? "cargandoo..": GetComputerById(element.Ordenador_id).label ;
          
            const {Tipo, Nombre} = element.tb_tool
            return(
              <tr className='row-table-inventory'>
                <td scope="row">{element.id}</td>
                <td>{room_name}</td>
                <td>{computer_name}</td>             
                <td>{Nombre}</td>
                <td>{Tipo}</td>
                <td>
                  <button className='btn btn-success' onClick={() => handleShow(element.id, room_name, element.Aula_id, computer_name, element.Ordenador_id, Nombre, element.Herramienta_id)}><GrEdit/></button>
                  <Modal show={show} onHide={handleClose} animation={false}>
                      <Modal.Header >
                          <Modal.Title>Editar Item</Modal.Title>
                      <button type="button" onClick={() => console.log(formRoom)}> STATE</button>
                      </Modal.Header>
                      <Modal.Body>               
                          <FormControl sx={{ m: 1, minWidth: 80 }}>
                              <h3>Aula</h3>
                              <Select defaultInputValue={formRoom.room_name} closeMenuOnSelect={true} onChange={handleOnChangeRoom} components={animatedComponents} options={rooms}  />                                    
                              <h3>Ordenador</h3>
                              <Select defaultInputValue={formComputer.computer_name} closeMenuOnSelect={true} onChange={handleOnChangeComputer}  components={animatedComponents} options={computers}/>                    
                              <h3>Herramientas</h3>
                              <Select defaultInputValue={formTool.tool_name} closeMenuOnSelect={true} onChange={handleOnChangeTool} components={animatedComponents} options={tools}/> 
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
                <button className= 'btn btn-danger' onClick={()=>deleteItem(element.id) }><GrTrash/></button>
                </td>              
              </tr>
              )}
            )}
        </table>
    )

    

}
export default Table;