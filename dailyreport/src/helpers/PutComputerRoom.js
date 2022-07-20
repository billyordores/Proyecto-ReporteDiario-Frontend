import db_axios from "./apiBackend/db_axios";

export const PutComputerRoom =(id, Aula_id, Ordenador_id, Herramienta_id)=>{
    return new Promise(async(resolve, reject) =>{
        const relation = {Aula_id: Aula_id, Ordenador_id:Ordenador_id, Herramienta_id:Herramienta_id}
        const {data} = await db_axios.put(`/ordenador_aula/${id}`, relation);
        resolve(data);
    })
}