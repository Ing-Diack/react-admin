import { Box,Typography,useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";



const Team = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isNonMobile = useMediaQuery("(nim-width:600px)");
   
    const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      width:200,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width:200
     
    },
    {
      field: "email",
      headerName: "Email",
      width:200
      
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
    
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

    return(
        <Box m="20px">
             <Header title="Team"  subTitle="Managing the team members"/>
             <Box m="40px 0 0 0" height="75vh"
              display="grid"
                    gap="20px"
                    gridTemplateColumns="repeat(12 , minmax(0, 1fr))"
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
                "& >div":{gridColumn: isNonMobile ? undefined : "span 12"}
            }}
             >
            
                <DataGrid
                rows={mockDataTeam}
                columns={columns}
                />
             </Box>
        </Box>
    )

}

export default Team;