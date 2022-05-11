import React from "react";
import { Field, Formik } from "formik";

const Formulario = () => {
  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={(valores) => {
          console.log("Inventario enviado");
          console.log(valores); //Accedo a lo que se ha enviado
        }}
      >
        {({ handleSubmit }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <div>
              <label>
                <Field type="radio" name="inventario" value="true" />Inventario
              </label>
            </div>
            <button className="Boton" type="submit">Enviar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
