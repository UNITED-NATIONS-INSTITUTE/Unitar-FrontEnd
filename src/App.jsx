import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/common/LandingPage";
import SignUp from "./components/common/SignUp";
import LogIn from "./components/common/LogIn";
import NoPage from "./components/common/NoPage";
import SignUpPrompt from "./components/common/SignUpPrompt";
import ParticipantDashboard from "./components/participants/ParticipantDashboard";
import HackathonDashboard from "./components/hackathon/HackathonDashboard";
import admin from "./components/admin/admin";



const App = () => {

  return (
    // WRAP BROWSER ROUTER IN INDEX.

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

        <Route path="/admin" element={<admin />} />
        {/* ORGANIZER */}
        ADMIN

      </Routes>
    </BrowserRouter>

  );      
}

export default App;
