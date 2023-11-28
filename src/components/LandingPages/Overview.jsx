import React from "react";
import Header from "./Header";

const Overview = () => {
  return (
    <div className="w-[950px] ml-10 bg-white min-h-screen">
      <Header />
      <div className=" bg-white p-4">
        <h3 className="text-[#2563EB] text-[16px] font-semibold ">Overview</h3>
        <p className="text-[#656565] ">
          To achieve international co-operation in solving international
          problems of an economic, social, cultural, or humanitarian character,
          and in promoting and encouraging respect for human rights and for
          fundamental freedoms for all without distinction as to race, sex,
          language, or religion; and.
        </p>
        <h3 className="text-[#2563EB] text-[16px] font-semibold mt-6 ">
          Our offer
        </h3>
        <p className="text-[#656565] ">
          We are creating incentizes for the youth to innovate and solve
          problems in society
        </p>
        <h3 className="text-[#2563EB] text-[16px] font-semibold mt-6">
          Our mission{" "}
        </h3>
        <p className="text-[#656565] ">
          We are creating incentizes for the youth to innovate and solve
          problems in society
        </p>
      </div>
    </div>
  );
};

export default Overview;
