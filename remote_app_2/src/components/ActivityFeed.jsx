import React from "react";

const feed = [
  { user: "Alice", action: "logged in", time: "2 mins ago" },
  { user: "Bob", action: "reset password", time: "5 mins ago" },
  { user: "Charlie", action: "created a ticket", time: "10 mins ago" },
  { user: "Dana", action: "logged out", time: "20 mins ago" },
];

const ActivityFeed = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h3>Recent Activity</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {feed.map((item, idx) => (
          <li key={idx} style={{ marginBottom: "0.5rem" }}>
            <strong>{item.user}</strong> {item.action} • <span style={{ color: "#888" }}>{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
