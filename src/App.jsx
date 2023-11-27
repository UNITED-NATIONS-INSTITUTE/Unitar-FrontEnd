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
    <Routes>
      <Route path="*" element={<NoPage />} />
      {/* COMMON ROUTES */}
      <Route index element={<LandingPage />} />
      <Route path="/org-signup" element={<SignUp />} />
      <Route path="/part-signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />

      {/* PARTICIPANT */}
      <Route path="participant" element={<Sidebar />}>
        <Route index element={<ParticipantDashboard />} />
        <Route path="profile" element={<ProfileDetails />} />
        <Route path="dashboard" element={<ParticipantDashboard />} />
        <Route path="hackathons" element={null}>
          <Route index element={<HackathonDashboard />} />
          <Route path="detail" element={<HackathonDetailsPage />} />
          <Route path="submit" element={<SubmitHackathon />} />
        </Route>
      </Route>
      {/* ORGANIZER */}
      <Route path="organizer" element={<OrgSidebar />}>
        <Route index element={<OrgDashboard />} />
        <Route path="profile" element={<ProfileDetails />} />
        <Route path="dashboard" element={<OrgDashboard />} />
        <Route path="hackathons" element={null}>
          <Route index element={<OrgHackathonPage />} />
          <Route path="create" element={<CreateHackathon />} />
        </Route>
        <Route path="submissions" element={<OrgSubmissionPage />} />
      </Route>
      {/* ADMIN */}
    </Routes>
  );
};

export default App;
