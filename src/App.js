import { ColorModeContext,useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './scenes/global/Topbar';
import Dashboard from "./scenes/dashboard";
import { Routes,Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import { useState } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Team from "./scenes/team";
import Contact from "./scenes/contacts";
import Invoice from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Lie from "./scenes/lie";
import Geography from "./scenes/Geography";
import Shops from "./scenes/shops";


function App() {
  const [theme,colorMode] = useMode();
  const [isSidebar,setIsSidebar]= useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme} >
        <CssBaseline/>
          <div className="app">
            
            <ProSidebarProvider>
               <Sidebar  isSidebar={isSidebar}/>
            </ProSidebarProvider>
            <main className="content">
              <Topbar/>
              <Routes>
               <Route path="/" element={<Dashboard/>}/>
               <Route path="/team" element={<Team/>}/>
                <Route path="/contacts" element={<Contact/>}/>
                <Route path="/invoices" element={<Invoice/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/calendar" element={<Calendar/>} />
                <Route  path="/faq"  element={<FAQ/>} />
                <Route path="/bar" element={<Bar/>} />
                <Route path="/pie" element={<Pie/>} />
                <Route path="/lie" element={<Lie/>} />
                <Route path="/geography" element={<Geography/>} />
                <Route path="/shops" element={<Shops/>} />
              </Routes>
            </main>
    </div>
      </ThemeProvider>
    </ColorModeContext.Provider>)
}

export default App;
