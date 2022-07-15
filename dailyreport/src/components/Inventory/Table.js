import { element } from "prop-types";
import React, { useEffect, useState } from "react";
import { GrTrash , GrEdit } from "react-icons/gr";
import { GetClassrooms} from "../../helpers/GetClassrooms";
import { GetComputersRooms } from "../../helpers/GetComputersRooms";
import { GetTools } from "../../helpers/GetTools";
import { DeleteComputerRoom } from "../../helpers/DeleteComputerRoom";
const Table =()=>{
  const [rooms, setRooms] = useState([]);
  const [roomById, setRoomById] = useState([]);
  
  const [computersRooms, setComputersRooms] = useState([]);
  const [tools, setTools] = useState([])
  const [idRelation, setIdRelation] = useState();

  useEffect(()=>{
    GetClassrooms().then((resolve)=>{
      setRooms(resolve)
    })
    GetComputersRooms().then((resolve)=>{
      setComputersRooms(resolve)
    })
    GetTools().then((resolve)=>{
      setTools(resolve)
    })  
    
  }, [computersRooms])
  
  const GetClassroomById = ( id ) => {
    return rooms.filter((element) => element.Aula_id === id )    
  }
  const deleteItem = ( id )=>{
    var result = window.confirm("Are you sure to delete?");
      if(result){
        DeleteComputerRoom( id ).then((resolve)=>{
          console.log(resolve);
        })
      }
    
  }
  return(
        <table class="table">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Aula</th>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Actions</th>
          </tr>
          {computersRooms.map((element)=>{
            const room  = GetClassroomById(element.Aula_id)
            const nameRoom = room.map((element)=> element.Planta+"."+element.Numero )
            const {Tipo, Nombre} = element.tb_tool
            return(
              <tr className='row-table-inventory'>
                <td scope="row">{element.id}</td>
                <td>{nameRoom}</td>              
                <td>{Nombre}</td>
                <td>{Tipo}</td>
                <td>
                  <button className='btn btn-success'><GrEdit/></button>
                  <button className= 'btn btn-danger' onClick={()=>deleteItem(element.id) }><GrTrash/></button>
                </td>              
              </tr>
              )}
            )}
        </table>
    )

    

}
export default Table;