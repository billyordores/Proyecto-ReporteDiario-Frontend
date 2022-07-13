import db_axios from "./apiBackend/db_axios";

export const GetClassroomById = async (dataModal) =>{
    const {id_aula} = dataModal
    const {data} = await db_axios.get(`/room/${id_aula}`);
    return data;
}