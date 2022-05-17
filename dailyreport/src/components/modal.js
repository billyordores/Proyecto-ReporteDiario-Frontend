import React, {useState} from "react"
import VentanaModal from './VentanaModal'
import '../css/FiltClassroom.css'
import { Field, Formik } from "formik";
import { Container, Table } from "reactstrap";
import { SettingsOutlined } from "@material-ui/icons";

const ModalComponent = ({cambiarEstadoModal1, estadoModal1, dataModal}) =>{

    //console.log("DATA DIMANICA  ",dataModal);
    const {nombre , tipo_objeto } = dataModal
    const [FormEnviado, setFormEnviado] = useState(false);

    return (
        <>
            <VentanaModal
                estado = {estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
                titulo= { 'Aula ' + nombre}
            >

<>
                <Formik
                initialValues={{
                }}

                validate={(valores) =>{
                    let errores ={};

                    if(valores){
                        errores.valores = 'Por favor selecciona un elemento del inventario'
                    }

                    return errores;
                } }


                onSubmit={(valores , {resetForm}) => {
                  resetForm();
                  console.log("Inventario del aula " + nombre + " actualizado");
                  console.log(valores); //Accedo a lo que se ha enviado

                  setFormEnviado(true);
                  setTimeout(() => setFormEnviado(false), 4000)
                }}
                >
                    {({ values, errors , handleSubmit, handleChange, handleBlur }) =>(
                        <form onSubmit={handleSubmit} className='Formulario' >
                            {console.log(errors)}

                            <Container>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Bien</th>
                                            <th>Mal</th>
                                            <th>No hay</th>
                                        </tr>
                                    </thead>
                                    <tbody  >
                                        <tr>
                                            <td>{tipo_objeto}</td>
                                            <td>
                                            <Field className='field' type='radio' name={tipo_objeto} value='bien'/>
                                            </td>
                                            <td>
                                            <Field className='field' type='radio' name={tipo_objeto} value='Mal'/>
                                            </td>
                                            <td>
                                            <Field className='field' type='radio' name={tipo_objeto} value='NoHay'/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Container>
                            <button className="Boton" type="submit" >Enviar</button>
                            <br></br>
                            {FormEnviado && <p className="exito" >Inventario enviado con éxito!</p>}
                            <br>    </br>
                            {errors.valores && <div className="error" >{errors.valores}</div>}
                        </form>
                    )}
                </Formik>
</>
                
            </VentanaModal>
        </>
    )
}

export default ModalComponent;