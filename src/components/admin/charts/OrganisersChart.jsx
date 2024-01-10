import React, { useState, useEffect } from "react";
import { getTopOrgs } from "../../../api/admins/admins";
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

const OrganizersChart = () => {
  const [organizations, setOrganizations] = useState({});

  useEffect(() => {
    getTopOrgs().then((res) => {
      setOrganizations(res.data);
    });
  }, []);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={organizations}
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
            dataKey="hackathon_count"
            fill="#089BD9"
            activeBar={<Rectangle fill="#00588C" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrganizersChart;
