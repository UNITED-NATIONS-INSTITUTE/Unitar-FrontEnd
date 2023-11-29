import React from "react";
import Overview from "./Overview";
import OverviewSidebar from "./OverviewSidebar";

const ProjectOverview = () => {
  return (
    <div className="flex">
      <div className="overflow-y-auto ">
        {" "}
        <OverviewSidebar />{" "}
      </div>

      <Overview />
    </div>
  );
};

export default ProjectOverview;
