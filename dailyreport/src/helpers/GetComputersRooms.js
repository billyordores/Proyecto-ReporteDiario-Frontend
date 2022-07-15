import db_axios from './apiBackend/db_axios';

export const GetComputersRooms = () =>{
    return new Promise(async(resolve, reject) =>{
        const {data} = await db_axios.get('/ordenador_aula');
        resolve(data);
    })
}