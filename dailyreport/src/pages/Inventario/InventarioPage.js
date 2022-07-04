import React from 'react';

import Page from '../../components/Page';
import { Row } from 'reactstrap';

const InventarioPage = () => {
  return (
    <Page
      title="Inventario" 
      breadcrumbs={[{ name: 'Inventario', active: true }]}>
        

        <Row>
          <p>Esta pagina es para el inventario</p>
        </Row>

    </Page>
  );
};

export default InventarioPage;
