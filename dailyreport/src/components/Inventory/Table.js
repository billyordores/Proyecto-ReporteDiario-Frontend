import React from "react";
import { GrTrash , GrEdit } from "react-icons/gr";
const Table =()=>{

    return(
        <table class="table">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Aula</th>
            <th scope="col">Item</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Actions</th>
          </tr>
          <tr className='row-table-inventory'>
            <td scope="row">1</td>
            <td>0.2</td>
            <td>HDMI</td>
            <td>1</td>
            <button className='btn btn-success'><GrEdit/></button>
            <button className= 'btn btn-danger' ><GrTrash/></button>
          </tr>
          <tr className='row-table-inventory'>
            <td scope="row">2</td>
            <td>0.2</td>
            <td>Cable HDMI</td>
            <td>2</td>
            <button className='btn btn-success'><GrEdit/></button>
            <button className= 'btn btn-danger' ><GrTrash/></button>
          </tr>
          <tr className='row-table-inventory'>
            <td scope="row">3</td>
            <td>0.2</td>
            <td>Cable VGA</td>
            <td>2</td>
            <button className='btn btn-success'><GrEdit/></button>
            <button className= 'btn btn-danger' ><GrTrash/></button>
          </tr>
        </table>
    )

    

}
export default Table;