
import db_axios from "./apiBackend/db_axios";

const PutObjectInvetory= async(tipo_objeto)=>{    

    const object = await db_axios.put('/inventario', {nombre:`${tipo_objeto}`})

    return object.data
}
export default PutObjectInvetory;