
import db_axios from "./apiBackend/db_axios";

const PostObjectInvetory= async(tipo_objeto)=>{    

    const object = await db_axios.post('/inventario', {tipo_objeto:`${tipo_objeto}`})

    return object
}
export default PostObjectInvetory;