import {Modal , Button} from "react-bootstrap";
import { GetObjectInvetory } from "../../helpers/GetObjectInventory";
import { GetAulas } from "../../helpers/GetAulas"
import PostInventoryAulas from "../../helpers/PostInventoryAulas";
import { useState , useEffect } from "react";
import { Dropdown } from "react-bootstrap";

const ModalInventoryAulas =(props)=> {

    const [listDropDown , setListDropDown ] = useState("")
    const [toggleObject , setToggleObject] = useState("")
    const [toggleAulas , setToggleAulas] = useState("")
    const [object, setObject] = useState([]);
    const [aulas, setAulas] = useState([])
    const [idObjectAula, setIdObjectAula] = useState({
          id_objeto: -1,
          id_aula:-1
    })

    useEffect(()=>{
        GetObjectInvetory().then(response =>{
            setObject(response)   
        })
    }, [object])

    useEffect(()=>{
      GetAulas().then(response =>{
          setAulas(response)
          console.log(response)  
      })
    }, [setAulas])

    const addObjetoAula = () =>{
      setTimeout(()=>{
        PostInventoryAulas(idObjectAula.id_aula, idObjectAula.id_objeto).then(response => {
          alert("Se ha añadido correctamente")
        })
        setToggleAulas("")
        setToggleObject("")
      }, 3000)
      
    }

    const changeToggleObject = (id , value ) =>{
      setToggleObject(value)
      idObjectAula.id_objeto = id
    }
    const changeToggleAulas = (id , value ) =>{
      setToggleAulas(value)
      idObjectAula.id_aula = id
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Añadir un objeto a una aula
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="dropDownModalInventory">
            <h3>Aula:</h3>
              <Dropdown className="text-secondary">
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="border border-secondary bg-secondary text-white shadow-lg" >
                  {toggleAulas}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {aulas.map((element)=>{                
                    return(
                      <Dropdown.Item onClick={()=>{ changeToggleAulas(element.id_aula , element.nombre) }} >{element.nombre}</Dropdown.Item>
                    )
                  })}
                </Dropdown.Menu>
              </Dropdown>
            <h3>Objeto:</h3>
              <Dropdown className="text-secondary">
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="border border-secondary bg-secondary text-white shadow-lg" >
                  {toggleObject}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {object.map((element)=>{                
                    return(
                      <Dropdown.Item onClick={()=>{ changeToggleObject(element.id_objeto,  element.tipo_objeto) }} >{element.tipo_objeto}</Dropdown.Item>
                    )
                  })}
                </Dropdown.Menu>
              </Dropdown> 
          </div>          

        </Modal.Body>
        <Modal.Footer>         
          <Button onClick={addObjetoAula} > Añadir </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default ModalInventoryAulas;