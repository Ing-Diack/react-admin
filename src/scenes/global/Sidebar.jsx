import { useState } from "react";
import {Menu,MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Box,IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import  HomeOutlinedIcon  from "@mui/icons-material/HomeOutlined";
import  PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";




const Item =({title,to,icon,selected,setSelected})=>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate=  useNavigate();

  const handleClick =()=>{
        setSelected(title);
        navigate(to);}
return( 
  <MenuItem
  active={selected===title}
 style={{color:colors.grey[100]}}
  onClick={handleClick}
  icon={icon}
  >
    <Typography  fontWeight="bold" >{title}</Typography>
  </MenuItem>
)

}
const SideBar = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {collapsed,collapseSidebar}=useProSidebar();
    const [selected,setSelected] = useState("Dashboard");

    return (
        <Box>
            <Sidebar 
            style={{height:"100%"}}
            backgroundColor={colors.greenAccent[700]}
                >
             <Menu  iconShape="square" 
             menuItemStyles={{
                      button: {
                            '&:hover': {
                                    backgroundColor:colors.primary[400],
                                    color: '#1b4332',
                                    borderRadius:"10px"
                                  },
                        },
                    }}
             >
                {/** MENU ICON AND LOGO */}
                <MenuItem 
                onClick={()=>collapseSidebar()}
                icon={collapsed? <MenuOutlinedIcon/>:undefined}>
                    {!collapsed &&(
                   <Box display="flex" justifyContent="space-between" alignItems="center">
                     <Typography>
                            ADMINS
                     </Typography>
                     <IconButton>
                        <MenuOutlinedIcon/>
                     </IconButton>
                    </Box>
                    )} 
                </MenuItem>
                {/**User */}
                {!collapsed && (
                  <Box m="25px">
                    <Box display="flex" justifyContent="center" alignItems="center">
                      <img 
                      alt="user.png"
                      width="100px"
                      height="100px"
                      src={`../../assets/user.png`}
                      style={{cursor:"pointer", borderRadius:"50%"}}
                       />
                    </Box>
                    <Box textAlign="center">
                      <Typography 
                      variant="h3"
                       color={colors.grey[100]}
                        fontWeight="bold" 
                        sx={{m:"10px 0 0 0"}}
                        > D.Fantome</Typography>
                      <Typography 
                      variant="h5"
                       color={colors.greenAccent[400]}
                       > VP Fancy Admin</Typography>
                    </Box>
                  </Box>
                )}
                {/**MENUS ITEMS */}
                <Box paddingLeft={collapsed ? undefined : "10%"}>
                  <Item 
                  title="Dashboard"
                  to="/"
                  icon={<HomeOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                  />
                  <Typography
                  variant="h6"
                  fontWeight="bold"
                  color={colors.grey[300]}
                  sx={{ m:"10px 0 5px 20px"}}
                  >
                    Data
                  </Typography>
                  <Item 
                  title="Manage Team"
                  to="/team"
                  icon={<PeopleOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                  />
                  <Item 
                  title="Contacts Infos"
                  to="/contacts"
                  icon={<ContactsOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                  />
                  <Item 
                  title="invoices Balances"
                  to="/invoices"
                  icon={<ReceiptOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                  />
                  <Typography
                  variant="h6"
                  fontWeight="bold"
                  color={colors.grey[300]}
                  sx={{ m:"10px 0 5px 20px"}}
                  >
                    Pages
                  </Typography>
                  <Item 
                  title="profile Form"
                  to="/form"
                  icon={<PersonOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                  />
                  <Item 
                  title="Calendar"
                  to="/calendar"
                  icon={<CalendarTodayOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                  />
                  <Item 
                  title="FAQ Page"
                  to="/faq"
                  icon={<HelpOutlineOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                  />
                  <Typography
                  variant="h6"
                  fontWeight="bold"
                  color={colors.grey[300]}
                  sx={{ m:"10px 0 5px 20px"}}
                  >
                    Chart
                  </Typography>
                  <Item 
                  title="Bar Chart"
                  to="/bar"
                  icon={<BarChartOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                  />
                  <Item 
                  title="Pie Chart"
                  to="/pie"
                  icon={<PieChartOutlineOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                  />
                  <Item 
                  title="Lie Chart"
                  to="/lie"
                  icon={<TimelineOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                  />
                  <Item 
                  title="Geography Chart"
                  to="/geography"
                  icon={<MapOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                  />
                </Box>

             </Menu>
            </Sidebar>
        </Box>
    )
}

export default SideBar;