import { Box,useTheme } from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts} from "../../data/mockData";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";


const Contact = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isNonMobile =useMediaQuery("(min-width:600)");


    const columns =[
        { field:"id", headerName:"ID",width:50},
        {field:"registrarId", headerName:"Registrar ID"},
        { field:"name", headerName:"Name",width:150,
         cellClassName :"name-column-cell"

        },
        {field:"age", headerName:"Age",
            type:"number",
            headerAlign:"left",
            align:"left",width:20
           
        },
        {field:"phone",headerName:"Phone Number",
         type:"number"
        
        },
        {field:"email", headerName:"Email",width:200
          
        },
        {field:"address",
         headerName:"Address",width:250
         },
          {field:"city",
         headerName:"City",
         },
          {field:"zipCode",
         headerName:"ZipCode"
         },
    ]

    return(
        <Box m="20px">
             <Header title="Contacts"  subTitle="List of Contacts for future Reference"/>
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
                    color:colors.greenAccent[300]
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
                "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                    color:`${colors.grey[100]} !important`
                },
                "& >div":{gridColumn:isNonMobile? undefined:"span 12"}
            }}
             >

                <DataGrid
                rows={mockDataContacts}
                columns={columns}
                components={{Toolbar:GridToolbar}}
                />
             </Box>
        </Box>
    )

}

export default Contact;