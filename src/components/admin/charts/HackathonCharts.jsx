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
  ResponsiveContainer,
} from "recharts";

const HackathonChart = () => {
  const [hackathons, setHackathons] = useState({});

  useEffect(() => {
    getTopHackathons().then((res) => {
      setHackathons(res.data);
    });
  }, []);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={hackathons}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className="text-[8px]" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="sub_count"
            fill="#089BD9"
            activeBar={<Rectangle fill="#00588C" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HackathonChart;
