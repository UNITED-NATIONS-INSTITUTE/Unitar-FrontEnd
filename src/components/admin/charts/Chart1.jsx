import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  {
    name: "Unitar W",

    pv: 2400,
    participants: 2400,
  },
  {
    name: "Hackit",

    pv: 1398,
    participants: 2210,
  },
  {
    name: "Build4SDGs",

    pv: 9800,
    participants: 2290,
  },
  {
    name: "GirlsTech",

    pv: 3908,
    participants: 2000,
  },
  {
    name: "CodeHack",

    pv: 4800,
    participants: 2181,
  },
  {
    name: "EnvHack",
    pv: 3800,
    participants: 2500,
  },
  {
    name: "DevIT",
    uv: 3490,
    pv: 4300,
    participants: 2100,
  },
];
const Chart1 = () => {
  return (
    <LineChart
      width={700}
      height={300}
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
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#089BD9"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default Chart1;
