import React from 'react';
import '../../styles/page/Inventory.css'
import Table from '../../components/Inventory/Table';
import AddItem from '../../components/Inventory/AddItem';
import Page from 'components/Page';
const ChartPage = () => {
  return (
    <>
      <Page title="Inventario" breadcrumbs={[{ name: 'Inventario', active: true }]}>
        <AddItem/>
        <Table/>
      </Page>
      
    </>   
    
  );
};

export default ChartPage;
