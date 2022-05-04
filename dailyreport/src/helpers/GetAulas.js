import db_axios from "./apiBackend/db_axios";

export const GetAulas = async()=>{
    let listAulas = []

    const {data} = await db_axios.get('/aulas')

    listAulas = [...data]

    return listAulas;
}