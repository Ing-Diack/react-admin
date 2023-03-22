import { Box,useTheme,Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices} from "../../data/mockData";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";


const Invoice = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isNonMobile =useMediaQuery("(min-width:600)");

    const columns =[
        { field:"id", headerName:"ID"},
        { field:"name", headerName:"Name",width:200,
        cellClassName :"name-column-cell"

        },
        
        {field:"phone",headerName:"Phone Number",
         type:"number",width:150
        
        },
        {field:"email", headerName:"Email",width:250
         
        },
          {field:"cost",
         headerName:"Cost",
         renderCell:(params)=>{
            <Typography color={colors.greenAccent[500]}>
                `${params.row.cost}`
            </Typography>}
         },
         {field:"date",
          headerName:"Date", 
          
        },

    ]

    return(
        <Box m="20px">
             <Header title="Invoices"  subTitle="List of Invoices Balances"/>
             <Box m="40px 0 0 0" height="75vh"
             display="grid"
             gridTemplateColumns="repeat(12,1fr)"
             gap="20px"
             sx={{"& .MuiDataGrid-root":{
                border:"none"},
                "& .MuiDataGrid-cell":{
                    borderBottom:"none"
                },
                "& .name-column--cell":{
                    color:colors.greenAccent[300],
                    justifyContent:"center"
                },
                "& .MuiDataGrid-columnHeaders":{
                    backgroundColor:colors.blueAccent[700],
                    borderBottom:"none"
                },
                "& .MuiDataGrid-virtualScroller":{
                    backgroundColor:colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer":{
                    borderTop:"none",
                    backgroundColor:colors.blueAccent[700]
                },
               "& .MuiCheckbox-root":{
                color:`${colors.greenAccent[200]} !important`
               },
               "& >div":{gridColumn:isNonMobile? undefined : "span 12"}
            }}
             >
             <DataGrid
                checkboxSelection
                rows={mockDataInvoices}
                columns={columns}
                />
             </Box>
        </Box>
    )

}

export default Invoice;