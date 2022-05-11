
import db_axios from "./apiBackend/db_axios";

const PutObjectInvetory= async(tipo_objeto, id_objeto)=>{    

    const object = await db_axios.put('/inventario', {tipo_objeto:`${tipo_objeto}`, id_objeto:`${id_objeto}`})

    return object.data
}
export default PutObjectInvetory;