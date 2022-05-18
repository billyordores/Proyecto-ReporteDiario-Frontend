import React, { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import { GetObjectInvetory } from "../helpers/GetObjectInventory";
import PutObjectInventory from "../helpers/PutObjectInventory";
import DeleteObjectInventory from "../helpers/DeleteObjectInventory";
import PostObjectInventory from "../helpers/PostObjectInventory";

const TableInventory = () => {
  const [data, setData] = useState([]);
  const columnas = [
    {
      title: "Id",
      field: "id_objeto",
      type: "numeric",
      headerStyle: {
        padding: " 0px 0px 0px 335px",
      },
      cellStyle: {
        textAlign: "center",
      },
      editable: "never",
    },
    {
      title: "Nombre",
      field: "tipo_objeto",
    },
  ];

  const [object, setObject] = useState([]);
  useEffect(() => {
    GetObjectInvetory().then((response) => {
      setObject(response);
    });
  }, [object]);

  const handleRowUpdate = (newData, oldData, resolve) => {
    PutObjectInventory(newData.tipo_objeto, newData.id_objeto).then(
      (response) => {
        console.log(response);
      }
    );
    resolve();
  };
  const handleRowAdd = (newData, resolve) => {
    PostObjectInventory(newData.tipo_objeto).then((response) => {
      console.log(response);
    });
    resolve();
  };
  const handleRowDelete = (oldData, resolve) => {
    console.log("dataToDelete", oldData);
    DeleteObjectInventory(oldData.id_objeto).then((response) => {
      console.log(response);
    });
    resolve();
  };

  return (
    <div className="Inventory-MaterialTable">
      <MaterialTable
        columns={columnas}
        data={object}
        title="Inventario de Materiales Uneatlantico"
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                handleRowUpdate(newData, oldData, resolve);
              }, 1000);
            }),
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              handleRowAdd(newData, resolve);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              handleRowDelete(oldData, resolve);
            }),
        }}
        style={{ width: "80%", margin: "0px 0px 0px 200px" }}
      />
    </div>
  );
};

export default TableInventory;
