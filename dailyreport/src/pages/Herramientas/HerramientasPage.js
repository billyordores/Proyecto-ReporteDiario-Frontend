import React, { useState } from "react";
import VentanaModal1 from "./VentanaModal";
import Page from '../../components/Page'
import { Row } from 'reactstrap';
import { MdDelete, MdModeEdit, MdAddCircleOutline, MdDone, MdClear} from 'react-icons/md'
import { toast } from "react-hot-toast";

const HerramientasPage = () => {

    const [modal, setModal] = useState(false)

    return (
        <Page title="Herramientas" breadcrumbs={[{ name: 'Herramientas', active: true }]}>
            <Row>
                <div className="col-md-8">
                    <th><button className="btn btn-info" ><MdAddCircleOutline />Agregar</button></th>
                    <table className="table">
                        <thead className="table-sucess table-crudtitle">
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Categoria</th>
                                <th className="text-right">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>HDMI</td>
                                <td>Hardware</td>
                                <th className="text-right">
                                    <button className="btn btn-success mr-2"><MdModeEdit />Editar</button>
                                    <button className="btn btn-danger mr-2" onClick={() => setModal(!modal)}><MdDelete /> Eliminar</button>
                                </th>
                                <VentanaModal1
                                estado={modal}
                                cambiarEstado={setModal}
                                titulo="Seguridad"
                                >
                                    <div className="contenido">
                                        {/* <h1>Notification</h1> */}
                                        <p>¿Deseas eliminar esta herramienta?</p>

                                        <button className="buttonYes btn-success" onClick={() => {toast.success('Herramienta Eliminada', {
                                            position: 'bottom-right',
                                            duration: 2000,
                                            style:{
                                                background: '#232A32',
                                                color: '#fff',
                                            }
                                        })
                                        setModal(!modal)}} ><MdDone fontSize={"20px"} />Si</button>
                                        
                                        <button className="buttonNo btn-danger" onClick={() => setModal(false)}><MdClear fontSize={"20px"} />No</button>
                                    </div>
                                </VentanaModal1>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Row>
        </Page>
    )
}

export default HerramientasPage