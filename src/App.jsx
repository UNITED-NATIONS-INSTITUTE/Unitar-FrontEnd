import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/common/LandingPage";
import SignUp from "./components/common/SignUp";
import LogIn from "./components/common/LogIn";
import NoPage from "./components/common/NoPage";
import SignUpPrompt from "./components/common/SignUpPrompt";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/org-signup" element={<SignUp />} />
        <Route path="/part-signup" element={<SignUp />} />
        <Route path="/prompt" element={<SignUpPrompt />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
