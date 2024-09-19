
import React from 'react';
import { Box, Toolbar, Typography, useTheme } from '@mui/material';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataInvoices } from "../../data/mockData";
import Header from '../../components/Header';

const Invoices = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "id",
            headerName: "ID",flex:0.5
        },
       
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,

        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,

        },
        {
            field: "phone",
            headerName: "Phone",
            flex: 1,

        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,
        },
       

       
    ]
    return (
        <Box m="20px">
           <Header title="INVOICES" subtitle="List of Invoices For Referance " />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
           
          },
          "& .MuiDataGrid-cell": {
            fontSize:"17px"
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
            color:`${colors.grey[100]} !important`
          }
        }}
      >
        <DataGrid checkboxSelection 
        rows={mockDataInvoices} 
        columns={columns} 
        components={{Toolbar:GridToolbar}} />
      </Box>
        </Box>
    );
}

export default Invoices;
