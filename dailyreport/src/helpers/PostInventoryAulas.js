import db_axios from "./apiBackend/db_axios";

const PostInventoryAulas = async(id_aula, id_objeto )=>{
    const object = await db_axios.post('/inventarioAulas', {id_aula:`${id_aula}` , id_objeto:`${id_objeto}` })

    return object
}
export default PostInventoryAulas;