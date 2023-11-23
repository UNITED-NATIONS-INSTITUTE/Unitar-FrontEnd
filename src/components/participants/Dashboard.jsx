import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="bg-white p-8 right-side">
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
