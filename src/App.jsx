import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import LandingPage from "./components/common/LandingPage";
import SignUp from "./components/common/SignUp";
import LogIn from "./components/common/LogIn";
import NoPage from "./components/common/NoPage";
import ParticipantDashboard from "./components/participants/ParticipantDashboard";
import Profile from "./components/common/profile/ProfileDetails";
import Sidebar from "./components/participants/Sidebar";
import HackathonDetailsPage from "./components/hackathon/submitProject/HackathonDetailsPage";
import HackathonDashboard from "./components/hackathon/hackathonDashboard/HackathonDashboard";
import SubmitHackathon from "./components/hackathon/submitHackathon/SubmitHackathon";
import OrgDashboard from "./components/organizers/OrgDashboard";
import OrgSidebar from "./components/organizers/OrgSidebar";
import OrgHackathonPage from "./components/organizers/OrgHackathonPage";
import OrgSubmissionPage from "./components/organizers/OrgSubmissionPage";
import CreateHackathon from "./components/organizers/createhackathon/CreateHackathon";

import PartHackathon from "./components/participants/PartHackathon";

import OrgOutlet from "./components/organizers/OrgOutlet";
import OrgSubmissions from "./components/organizers/OrgSubmissions";
import OrgViewProject from "./components/organizers/OrgViewProject";

import hackathonentries from "./components/admin/hackathonentries";
import hackathons from "./components/admin/hackathons";
import organizers from "./components/admin/organizers";
import participants from "./components/admin/participants";
import Sidebar from "./components/admin/Sidebar";

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
        <Route path="profile" element={<Profile />} />
        <Route index element={<ParticipantDashboard />} />
        <Route path="dashboard" element={<ParticipantDashboard />} />
        <Route path="hackathons" element={<PartHackathon />}>
          <Route index element={<HackathonDashboard />} />
          <Route path="detail" element={<HackathonDetailsPage />} />
          <Route path="submit" element={<SubmitHackathon />} />
        </Route>
      </Route>
      {/* ORGANIZER */}
      <Route path="organizer" element={<OrgSidebar />}>
        <Route index element={<OrgDashboard />} />
        <Route path="dashboard" element={<OrgOutlet />}>
          <Route index element={<OrgDashboard />} />
          <Route path="detail" element={<OrgViewProject />} />
        </Route>

        <Route path="hackathons" element={<Outlet />}>
          <Route index element={<OrgHackathonPage />} />
          <Route path="create" element={<CreateHackathon />} />
        </Route>
        <Route path="submissions" element={<OrgOutlet />}>
          <Route index element={<OrgSubmissionPage />} />
          <Route path="table" element={<OrgSubmissions />} />
        </Route>
      </Route>
      {/* ADMIN */}
      <Route path="admin" element={<AdminSidebar />}>
        <Route index element={<AdminDashboard />} />
        <Route path="participants" element={<Outlet />}>
          <Route index element={<AllParticipants />} />
          <Route path="detail" element={<ParticipantProfile />} />
        </Route>
        <Route path="organizers" element={<Outlet />}>
          <Route index element={<AllOrganizers />} />
          <Route path="detail" element={<OrganizerProfile />} />
        </Route>
        <Route path="hackathons" element={<Outlet />}>
          <Route index element={<AllHackathons />} />
          <Route path="detail" element={<HackathonDetails />} />
        </Route>
        <Route path="submissions" element={<Outlet />}>
          <Route index element={<AllSubmissions />} />
          <Route path="detail" element={<SubmissionDetails />} />
          {/* IMPLEMENT submission DELETION IN THE submission DETAIL COMPONENT ABOVE */}
        </Route>
        <Route path="user" element={<Outlet />}>
          <Route index element={<UsersTable />} />
          <Route path="detail" element={<UserDetails />} />
          {/* IMPLEMENT USER ACTIVATION AND DEACTIVATION IN THE USER DETAIL COMPONENT ABOVE */}
          <Route path="create" element={<CreateUser />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
