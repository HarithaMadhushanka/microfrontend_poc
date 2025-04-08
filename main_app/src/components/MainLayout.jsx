import React, { Suspense, useState, useEffect } from "react";

// Remote components
const RemoteThemedComponent = React.lazy(() =>
  import("remote_app_components/ThemedComponent")
);
const RemoteThemePanel = React.lazy(() =>
  import("remote_app_components/ThemingPanel")
);
const ChartWidget = React.lazy(() =>
  import("remote_app_components/ChartWidget")
);
const TableWidget = React.lazy(() =>
  import("remote_app_components/TableWidget")
);
const RemoteUserSummaryCards = React.lazy(() =>
  import("remote_app_components/UserSummaryCards")
);
const RemoteActivityFeed = React.lazy(() =>
  import("remote_app_components/ActivityFeed")
);

const MainLayout = ({ user, onLogout }) => {
  const [theme, setTheme] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);

  const isAdmin = user.role === "admin";

  useEffect(() => {
    if (user?.username) {
      const savedTheme = localStorage.getItem(`theme_${user.username}`);
      if (savedTheme) {
        setTheme(JSON.parse(savedTheme));
      }
    }
  }, [user]);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: theme?.bg || "#f4f4f4",
        color: theme?.text || "#1f2937",
        transition: "all 0.3s ease",
      }}
    >
      {/* Top Navbar */}
      <div className="p-4 flex justify-between items-center bg-black text-white">
        <h1 className="text-xl font-bold">Microfrontend POC</h1>
        <div className="flex items-center gap-4">
          <button onClick={() => setPanelOpen(!panelOpen)}>
            ☰ Theme Panel
          </button>
          <button
            onClick={onLogout}
            className="bg-red-700 px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1">
        <div className="flex-1 p-6 space-y-6">
          <Suspense fallback={<div>Loading remote component...</div>}>
            <RemoteThemedComponent userName={user.username} theme={theme} />
          </Suspense>

          {isAdmin && (
            <Suspense fallback={<div>Loading dashboard...</div>}>
              <RemoteUserSummaryCards />
              <ChartWidget />
              <RemoteActivityFeed />
            </Suspense>
          )}

          {!isAdmin && (
            <Suspense fallback={<div>Loading dashboard...</div>}>
              <TableWidget />
            </Suspense>
          )}
        </div>

        {/* Theme panel (everyone can see, only admin can add) */}
        {panelOpen && (
          <div className="w-80 border-l">
            <Suspense fallback={<div>Loading panel...</div>}>
              <RemoteThemePanel currentUser={user} onSelectTheme={setTheme} />
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
