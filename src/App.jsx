import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/common/LandingPage";
import SignUp from "./components/common/SignUp";
import LogIn from "./components/common/LogIn";
import NoPage from "./components/common/NoPage";
import ParticipantDashboard from "./components/participants/ParticipantDashboard";
import Sidebar from "./components/participants/Sidebar";
import HackathonDetailsPage from "./components/hackathon/submitProject/HackathonDetailsPage";
import HackathonDashboard from "./components/hackathon/hackathonDashboard/HackathonDashboard.jsx";
import SubmitHackathon from "./components/hackathon/submitHackathon/SubmitHackathon";
import OrgDashboard from "./components/organizers/OrgDashboard";
import OrgSidebar from "./components/organizers/OrgSidebar";
import OrgHackathonPage from "./components/organizers/OrgHackathonPage";
import OrgSubmissionPage from "./components/organizers/OrgSubmissionPage";
import CreateHackathon from "./components/organizers/createhackathon/CreateHackathon.jsx";
// profile
import ProfileDetails from "./components/common/profile/ProfileDetails";
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
        <Route path="/profile" element={<Profile />} />
        {/* PARTICIPANT */}
        {/* The parent element should be a Nav component that allows an outlet its the side. Thus refactor 24 below */}
        <Route path="participant" element={<Sidebar />}>
          <Route index element={<ParticipantDashboard />} />
          <Route path="part-dashboard" element={<ParticipantDashboard />} />
          <Route path="hackathons" element={<HackathonDashboard />} />
          <Route path="hack-details" element={<HackathonDetailsPage />} />
          <Route path="submit-project" element={<SubmitHackathon />} />
          {/* Other participant routes cascade here: if a subroute, wrap and cascade */}
        </Route>
        {/* ORGANIZER */}
        <Route path="organizer" element={<OrgSidebar />}>
          <Route index element={<OrgDashboard />} />
          <Route path="org-dashboard" element={<OrgDashboard />} />
          <Route path="org-hackathon" element={<OrgHackathonPage />} />
          <Route path="org-submissions" element={<OrgSubmissionPage />} />
        </Route>
        <Route path="/create-hackathon" element={<CreateHackathon />} />
        ADMIN
      </Routes>
    </BrowserRouter>
  );
};

export default App;
