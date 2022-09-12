import React, { useEffect, useState } from "react";
import { GetTools } from "../../helpers/GetTools"
// import MaterialTable from 'material-table';

const TableTool =()=>{
    const [tools, setTools] = useState([])

    useEffect(()=>{
        GetTools().then((response)=>
            setTools(response)
        ).catch((error)=> console.log("error in API geting tools"))
    }, [tools])
    const data = [
        { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
        { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
      ];
      
      const columns = [
        { title: "Name", field: "name" },
        { title: "Surname", field: "surname" },
        { title: "Birth Year", field: "birthYear", type: "numeric" },
      ];
    return (
        <></>   
    )
}
export default TableTool