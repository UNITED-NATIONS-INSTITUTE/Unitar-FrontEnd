import React from "react";

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

const data = [
  {
    name: "Unitar W",
    participants: 2400,
  },
  {
    name: "Hackit",
    participants: 2210,
  },
  {
    name: "Build4SDGs",
    participants: 2290,
  },
  {
    name: "GirlsTech",
    participants: 2000,
  },
  {
    name: "CodeHack",
    participants: 2181,
  },
  {
    name: "EnvHack",
    participants: 2500,
  },
  {
    name: "DevIT",
    participants: 2100,
  },
];
const Chart2 = () => {
  return (
    <BarChart
      width={900}
      height={400}
      data={data}
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
        dataKey="participants"
        fill="#089BD9"
        activeBar={<Rectangle fill="#00588C" />}
      />
    </BarChart>
  );
};

export default Chart2;
