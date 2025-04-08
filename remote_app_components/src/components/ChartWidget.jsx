// src/components/ChartWidget.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", users: 100 },
  { name: "Feb", users: 200 },
  { name: "Mar", users: 300 },
  { name: "Apr", users: 250 },
  { name: "May", users: 400 },
];

const ChartWidget = () => (
  <div style={{ width: "100%", height: 300, padding: "1rem" }}>
    <h3>Dummy Users Chart</h3>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="users" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default ChartWidget;
