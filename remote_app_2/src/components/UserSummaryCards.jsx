import React from "react";

const cards = [
  { title: "Active Users", value: 152, color: "#4caf50" },
  { title: "Total Revenue", value: "$12,340", color: "#2196f3" },
  { title: "Open Tickets", value: 27, color: "#f44336" },
  { title: "New Signups", value: 19, color: "#ff9800" },
];

const cardStyle = {
  flex: 1,
  margin: "0.5rem",
  padding: "1rem",
  borderRadius: "8px",
  color: "#fff",
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  padding: "1rem",
};

const UserSummaryCards = () => {
  return (
    <div style={containerStyle}>
      {cards.map((card, idx) => (
        <div
          key={idx}
          style={{
            ...cardStyle,
            backgroundColor: card.color,
            minWidth: "150px",
          }}
        >
          <h4>{card.title}</h4>
          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default UserSummaryCards;
