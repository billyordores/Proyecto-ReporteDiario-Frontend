import db_axios from "./apiBackend/db_axios";

export const GetObjectInvetory = async()=>{
    let listObject = []

    const {data} = await db_axios.get('/inventario')

    listObject = [...data]

    return listObject;
}