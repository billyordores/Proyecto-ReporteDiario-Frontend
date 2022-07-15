import db_axios from './apiBackend/db_axios';

export const GetComputers = () =>{
    return new Promise(async(resolve, reject) =>{
        const {data} = await db_axios.get('/computer');
        resolve(data);
    })
}