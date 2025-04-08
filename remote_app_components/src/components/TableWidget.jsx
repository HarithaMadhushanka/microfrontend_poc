import React from "react";

const dummyData = [
  { id: 1, name: "admin", role: "Admin", status: "Active" },
  { id: 2, name: "test_user_1", role: "User", status: "Active" },
  { id: 3, name: "test_user_2", role: "User", status: "Pending" },
];

const TableWidget = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h3>User Overview</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={th}>ID</th>
            <th style={th}>Name</th>
            <th style={th}>Role</th>
            <th style={th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((user) => (
            <tr key={user.id}>
              <td style={td}>{user.id}</td>
              <td style={td}>{user.name}</td>
              <td style={td}>{user.role}</td>
              <td style={td}>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const th = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left",
};

const td = {
  border: "1px solid #ccc",
  padding: "8px",
};

export default TableWidget;
