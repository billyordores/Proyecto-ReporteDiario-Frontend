
import db_axios from "./apiBackend/db_axios";

const DeleteObjectInventory= async( id_objeto)=>{    

    const object = await db_axios.delete(`/inventario/${id_objeto}`)
    return object;
}
export default DeleteObjectInventory;