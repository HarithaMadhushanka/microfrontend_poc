import React from "react";

const ThemedComponent = ({ userName = "User", theme }) => {
  const fallbackTheme = {
    bg: "#f4f4f4",
    text: "#1f2937", // gray-800
  };

  const appliedTheme = {
    bg: theme?.bg || fallbackTheme.bg,
    text: theme?.text || fallbackTheme.text,
  };

  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div
        className="w-full max-w-md rounded-xl p-6 shadow-lg border transition-all duration-300"
        style={{
          backgroundColor: "#ffffff", // Keep card readable
          color: appliedTheme.text,
          borderColor: appliedTheme.bg,
        }}
      >
        <h2 className="text-xl font-bold mb-2">Hello, {userName}</h2>
        {/* Compact Theme Tag */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-sm font-medium">Theme: </span>
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              backgroundColor: appliedTheme.bg,
              color: appliedTheme.text,
            }}
          >
            {theme?.name || "Default"}
          </span>
        </div>
        <p className="text-sm opacity-80">
          This remote component is being loaded from Remote App 2, and is shown
          to all users.
        </p>
      </div>
    </div>
  );
};

export default ThemedComponent;
