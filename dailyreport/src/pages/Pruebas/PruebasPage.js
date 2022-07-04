import React, { useState } from "react";

import Page from "../../components/Page";

import { Row } from "reactstrap" //Importar



const PruebasPage = () => {
    return (
        <Page title="Pruebas" breadcrumbs={[{ name: 'Pruebas', active: true }]} >
            <p>Aqui hacer pruebas con los modales</p>
        </Page>
    )
}

export default PruebasPage;