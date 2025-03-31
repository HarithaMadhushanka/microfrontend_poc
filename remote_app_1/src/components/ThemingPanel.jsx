import React, { useState, useEffect } from "react";

const defaultThemes = [
  { name: "Light", bg: "white", text: "black" },
  { name: "Dark", bg: "#111827", text: "grey" },
  { name: "Hitachi Red", bg: "#E60012", text: "black" },
];

const CUSTOM_THEME_KEY = "customThemes";

const ThemingPanel = ({ currentUser, onSelectTheme }) => {
  const [themes, setThemes] = useState(defaultThemes);
  const [newTheme, setNewTheme] = useState({
    name: "",
    bg: "#ffffff",
    text: "#000000",
  });

  useEffect(() => {
    const savedCustom = localStorage.getItem(CUSTOM_THEME_KEY);
    if (savedCustom) {
      setThemes([...defaultThemes, ...JSON.parse(savedCustom)]);
    }

    // Load saved theme for current user
    if (currentUser?.username) {
      const userTheme = localStorage.getItem(`theme_${currentUser.username}`);
      if (userTheme) {
        onSelectTheme(JSON.parse(userTheme));
      }
    }
  }, [currentUser.username, onSelectTheme]);

  const handleThemeSelect = (theme) => {
    onSelectTheme(theme);
    if (currentUser?.username) {
      localStorage.setItem(
        `theme_${currentUser.username}`,
        JSON.stringify(theme)
      );
    }
  };

  const handleAddTheme = () => {
    if (!newTheme.name.trim()) {
      alert("Please enter a theme name.");
      return;
    }

    if (newTheme.bg.toLowerCase() === newTheme.text.toLowerCase()) {
      alert("Text color and background color cannot be the same.");
      return;
    }

    const updated = [...themes, newTheme];
    setThemes(updated);
    localStorage.setItem(CUSTOM_THEME_KEY, JSON.stringify(updated.slice(3)));
    setNewTheme({ name: "", bg: "#ffffff", text: "#000000" });
  };

  return (
    <div className="p-6 text-black w-80 bg-white h-full overflow-y-auto border-l border-gray-200 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          Theme Selector
        </h2>

        <ul className="space-y-3">
          {themes.map((t, i) => (
            <li key={i}>
              <button
                onClick={() => handleThemeSelect(t)}
                className="w-full border px-4 py-2 rounded-md flex items-center justify-between hover:bg-gray-100 transition duration-150 shadow-sm"
              >
                <span className="font-medium">{t.name}</span>
                <span
                  className="inline-block w-5 h-5 rounded-full border border-gray-300 shadow-inner"
                  style={{ backgroundColor: t.bg }}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Admin-only theme creation section */}
      {currentUser?.username === "admin" && (
        <div className="pt-2 border-t border-gray-300 mt-6 space-y-4">
          <h3 className="font-semibold text-lg">Add New Theme</h3>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Theme Name"
              value={newTheme.name}
              onChange={(e) =>
                setNewTheme({ ...newTheme, name: e.target.value })
              }
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <div>
              <label className="block text-sm mb-1 font-medium">
                Background Color
              </label>
              <input
                type="color"
                value={newTheme.bg}
                onChange={(e) =>
                  setNewTheme({ ...newTheme, bg: e.target.value })
                }
                className="w-full h-10 rounded-md cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">
                Text Color
              </label>
              <input
                type="color"
                value={newTheme.text}
                onChange={(e) =>
                  setNewTheme({ ...newTheme, text: e.target.value })
                }
                className="w-full h-10 rounded-md cursor-pointer"
              />
            </div>

            <button
              onClick={handleAddTheme}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-2 rounded-md shadow-md transition"
            >
              Add Theme
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemingPanel;
