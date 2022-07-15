import db_axios from './apiBackend/db_axios';
export const DeleteComputerRoom =( id )=>{    
    return new Promise(async(resolve, reject) =>{
        const {data} = await db_axios.delete(`/ordenador_aula/${id}`);
        resolve(data);
    })
}