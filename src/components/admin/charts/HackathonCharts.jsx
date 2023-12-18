import React, { useState, useEffect } from "react";
import { getTopHackathons } from "../../../api/admins/admins";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const HackathonChart = () => {
  const [hackathons, setHackathons] = useState({});

  useEffect(() => {
    getTopHackathons().then((res) => {
      setHackathons(res.data);
    });
  }, []);
  return (
    <div>
      {" "}
      <BarChart
        width={700}
        height={400}
        data={hackathons}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="sub_count"
          fill="#089BD9"
          activeBar={<Rectangle fill="#00588C" />}
        />
      </BarChart>
    </div>
  );
};

export default HackathonChart;
// <LineChart
//     width={700}
//     height={300}
//     data={hackathons}
//     margin={{
//       top: 5,
//       right: 30,
//       left: 20,
//       bottom: 5,
//     }}
//   >
//     <CartesianGrid strokeDasharray="3 3" />
//     <XAxis dataKey="name" />
//     <YAxis />
//     <Tooltip />
//     <Legend />
//     <Line
//       type="monotone"
//       dataKey="sub_count"
//       stroke="#089BD9"
//       activeDot={{ r: 8 }}
//     />
//   </LineChart>
