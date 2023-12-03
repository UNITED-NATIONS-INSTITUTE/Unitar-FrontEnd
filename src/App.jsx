import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import LandingPage from "./components/common/LandingPage";
import SignUp from "./components/common/SignUp";
import LogIn from "./components/common/LogIn";
import NoPage from "./components/common/NoPage";
import ParticipantDashboard from "./components/participants/ParticipantDashboard";
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
import ViewDetailsPage from "./components/organizers/ViewDetailsPage";
import AddMedia from "./components/hackathon/AddMedia";
import HackathonMedia from "./components/hackathon/HackathonMedia";
import EmailValidation from "./components/organizers/createhackathon/EmailValidation";
import CodeVerification from "./components/organizers/createhackathon/CodeVerification";
import EditHackathon from "./components/organizers/edithackathon/EditHackathon";
import OrgEditDetails from "./components/organizers/profile/OrgEditDetails";
import MyHackathons from "./components/participants/MyHackathons";
import CreateOrgProfile from "./components/organizers/profile/CreateOrgProfile";
import OrgProfilePage from "./components/organizers/profile/OrgProfilePage";
import CreatePartProfile from "./components/participants/profile/CreatePartProfile";
import PartEditDetails from "./components/participants/profile/PartEditDetails";
import UserProfilePage from "./components/participants/profile/UserProfilePage";

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

        <Route path="profile" element={<Outlet />}>
          <Route index element={<UserProfilePage />} />
          <Route path="create" element={<CreatePartProfile />} />
          <Route path="edit" element={<PartEditDetails />} />
        </Route>
        <Route path="dashboard" element={<ParticipantDashboard />} />
        <Route path="myhackathons" element={<MyHackathons />} />
        <Route path="hackathons" element={<PartHackathon />}>
          <Route index element={<HackathonDashboard />} />

          <Route path="detail" element={<HackathonDetailsPage />} />
          <Route path="submit" element={<SubmitHackathon />} />
        </Route>
      </Route>
      {/* ORGANIZER */}
      <Route path="organizer" element={<OrgSidebar />}>
        <Route index element={<OrgDashboard />} />
        <Route path="profile" element={<Outlet />}>
          <Route index element={<OrgProfilePage />} />
          <Route path="create" element={<CreateOrgProfile />} />
          <Route path="edit" element={<OrgEditDetails />} />
        </Route>
        <Route path="dashboard" element={<OrgOutlet />}>
          <Route index element={<OrgDashboard />} />
          <Route path="detail" element={<OrgViewProject />} />
          <Route path="editdetail" element={<EditHackathon />} />
        </Route>
        <Route path="hackathons" element={<Outlet />}>
          <Route index element={<OrgHackathonPage />} />
          <Route path="create" element={<Outlet />}>
            <Route index element={<CreateHackathon />} />
            <Route path="media" element={<Outlet />}>
              <Route index element={<AddMedia />} />
              <Route path="details" element={<HackathonMedia />} />
            </Route>
            <Route path="verify" element={<EmailValidation />} />
            <Route path="validate" element={<CodeVerification />} />
          </Route>
        </Route>
        <Route path="submissions" element={<OrgOutlet />}>
          <Route index element={<OrgSubmissionPage />} />
          <Route path="details" element={<OrgOutlet />}>
            <Route index element={<OrgSubmissions />} />
            <Route path="view" element={<ViewDetailsPage />} />
          </Route>
        </Route>
      </Route>
      {/* ADMIN */}
    </Routes>
  );
};

export default App;
