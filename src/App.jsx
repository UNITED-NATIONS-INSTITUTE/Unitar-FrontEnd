import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/common/LandingPage";
import SignUp from "./components/common/SignUp";
import LogIn from "./components/common/LogIn";
import NoPage from "./components/common/NoPage";
import SignUpPrompt from "./components/common/SignUpPrompt";
import ParticipantDashboard from "./components/participants/ParticipantDashboard";
import HackathonDashboard from "./components/hackathon/HackathonDashboard";



import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    // WRAP BROWSER ROUTER IN INDEX.
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<NoPage />} />
        {/* COMMON ROUTES */}
        <Route index element={<LandingPage />} />
        <Route path="/org-signup" element={<SignUp />} />
        <Route path="/part-signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        {/* TO DO: REPLACE THIS WITH MODAL */}
        <Route path="/prompt" element={<SignUpPrompt />} />
        {/* PARTICIPANT */}
        {/* The parent element should be a Nav component that allows an outlet its the side. Thus refactor 24 below */}
        <Route  path="/participant" element={<ParticipantDashboard />}> 
          <Route index element={<ParticipantDashboard />} />
          <Route path="hackathons" element={<HackathonDashboard />} />
          {/* Other participant routes cascade here: if a subroute, wrap and cascade */}
        </Route>
        {/* ORGANIZER */}
        ADMIN
        <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
      </Routes>
    </BrowserRouter>
    </main>
        </div>
      </ThemeProvider>
      </ColorModeContext.Provider>
  );      
}

export default App;
