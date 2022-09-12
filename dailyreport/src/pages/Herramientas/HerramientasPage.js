import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import "../../styles/Herramienta.css"
import { GrTrash , GrEdit } from "react-icons/gr";
import Page from 'components/Page';
import { GetTools } from "../../helpers/GetTools";
import TableTool from "../../components/Tool/TableTool";
import MaterialTable from "material-table";

const HerramientasPage = () => {
    return(
        <>
        <Page title="Herramienta" breadcrumbs={[{ name: 'Herramienta', active: true }]}>
            <TableTool/>            
        </Page>            
        </>
        
    )
}

export default HerramientasPage