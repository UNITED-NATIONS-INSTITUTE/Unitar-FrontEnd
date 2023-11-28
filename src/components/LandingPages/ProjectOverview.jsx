import React from "react";
import Overview from "./Overview";
import OverviewSidebar from "./OverviewSidebar";

const ProjectOverview = () => {
  return (
    <div className="flex">
      <OverviewSidebar />
      <Overview />
    </div>
  );
};

export default ProjectOverview;
