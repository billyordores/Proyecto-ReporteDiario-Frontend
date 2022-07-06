import Page from 'components/Page';
import React from 'react';
import { toast } from "react-hot-toast";


const Chromebooks = () => {
  return (
    <Page title="Chromebooks" breadcrumbs={[{ name: 'Chromebooks', active: true }]}>
      <div>
        Aqui chromebooks
      </div>

      <button className="buttonYes btn-success" onClick={() => {
        toast.success('Herramienta Eliminada', {
          position: 'bottom-right',
          duration: 2000,
          style: {
            background: '#232A32',
            color: '#fff',
          }
        })
      }}>yy
      </button>
    </Page>
  );
};

export default Chromebooks;
