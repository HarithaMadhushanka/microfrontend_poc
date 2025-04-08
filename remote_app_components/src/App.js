import "./App.css";
import React from "react";
import ChartWidget from "./components/ChartWidget";
import ActivityFeed from "./components/ActivityFeed";
import TableWidget from "./components/TableWidget";
import ThemedComponent from "./components/ThemedComponent";
// import ThemingPanel from "./components/ThemingPanel";
import UserSummaryCards from "./components/UserSummaryCards";

function App() {
  return (
    <div>
      <h1 style={{ padding: "1rem" }}>Component Library Remote</h1>
      <div style={{ padding: "1rem" }}>
        <ThemedComponent />
      </div>
      <ActivityFeed />
      <UserSummaryCards />
      <ChartWidget />

      <TableWidget />

      {/* <ThemingPanel /> */}
    </div>
  );
}

export default App;
