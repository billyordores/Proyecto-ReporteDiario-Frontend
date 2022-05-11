import React, {useState} from "react"
import VentanaModal from './VentanaModal'
import '../css/FiltClassroom.css'
import { Field, Formik } from "formik";

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
                onSubmit={(valores , {resetForm}) => {
                  resetForm();
                  console.log("Inventario del aula " + nombre + " actualizado");
                  console.log(valores); //Accedo a lo que se ha enviado
                  setFormEnviado(true);
                  setTimeout(() => setFormEnviado(false), 4000)
                }}
                >
                    {({ values, handleSubmit }) =>(
                        <form onSubmit={handleSubmit} className='Formulario' >
                            <div>
                                <label>
                                    <Field type='radio' name={tipo_objeto} value='true' /> {tipo_objeto}
                                </label>
                            </div>
                            <button className="Boton" type="submit" >Enviar Inventario Del Aula {nombre}</button>
                            {FormEnviado && <p className="exito" >Inventario enviado con éxito!</p>}
                        </form>
                    )}
                </Formik>
</>
                
            </VentanaModal>
        </>
    )
}

export default ModalComponent;