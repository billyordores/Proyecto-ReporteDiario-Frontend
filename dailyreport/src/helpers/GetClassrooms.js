import db_axios from './apiBackend/db_axios';

export const GetClassrooms = () =>{
    return new Promise(async(resolve, reject) =>{
        const {data} = await db_axios.get('/room');
        resolve(data);
        console.log("datafromBackend", data);  
    })
}