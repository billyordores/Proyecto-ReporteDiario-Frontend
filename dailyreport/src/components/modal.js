import React, { useEffect, useState } from "react";
import VentanaModal from "./VentanaModal";
import "../css/FiltClassroom.css";
import { Field, Formik } from "formik";
import { Container, Table } from "reactstrap";
import { GetInventario } from "../helpers/getInventario";

const ModalComponent = ({ cambiarEstadoModal1, estadoModal1, dataModal }) => {
  const { id_aula, nombre } = dataModal;
  const [FormEnviado, setFormEnviado] = useState(false);
  const [inventario, setInventario] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const func = async () => {
      const data = await GetInventario(dataModal);
      setInventario({
        data: data,
        loading: false,
      });
    };
    func();
  }, [dataModal]);

  return (
    <>
      <VentanaModal
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
        titulo={"Aula " + nombre}
      >
        <>
          <Formik
            initialValues={{}}
            onSubmit={(valores, { resetForm }) => {
              resetForm();
              console.log("Inventario del aula " + nombre + " actualizado");
              console.log(valores);

              setFormEnviado(true);
              setTimeout(() => setFormEnviado(false), 4000);
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="Formulario">
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

                    <tbody>
                      {inventario.data.map((element) => {
                        return (
                          <tr>
                            <th>{element.tipo_objeto}</th>
                            <td>
                              <Field
                                className="field"
                                type="radio"
                                name={element.tipo_objeto}
                                value="Bien"
                              />
                            </td>
                            <td>
                              <Field
                                className="field"
                                type="radio"
                                name={element.tipo_objeto}
                                value="Mal"
                              />
                            </td>
                            <td>
                              <Field
                                className="field"
                                type="radio"
                                name={element.tipo_objeto}
                                value="NoHay"
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Container>
                <button className="ClasBtn" type="submit">
                  Enviar
                </button>
                <br></br>
                {FormEnviado && (
                  <p className="exito">Inventario enviado con éxito!</p>
                )}
              </form>
            )}
          </Formik>
        </>
      </VentanaModal>
    </>
  );
};

export default ModalComponent;
