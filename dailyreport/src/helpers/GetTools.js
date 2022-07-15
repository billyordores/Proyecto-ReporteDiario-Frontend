import db_axios from './apiBackend/db_axios';

export const GetTools = () =>{
    return new Promise(async(resolve, reject) =>{
        const {data} = await db_axios.get('/tool');
        resolve(data);
    })
}