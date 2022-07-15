import db_axios from "./apiBackend/db_axios";

export const PostComputerRoom =(Aula_id, Ordenador_id, Herramienta_id)=>{

    Herramienta_id.map(( {value} )=>{
        return new Promise(async(resolve, reject) =>{
            const Herramienta_id = value
            const data = await db_axios.post('/ordenador_aula', {Aula_id, Ordenador_id, Herramienta_id} );
            console.log("Relation Data", data);  
        })
    })
    
}