import React, { createContext, useContext, useState } from "react";

const defaultTheme = {
  name: "Dark",
  bg: "#111827",
  text: "white",
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("selectedTheme");
    return saved ? JSON.parse(saved) : defaultTheme;
  });

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("selectedTheme", JSON.stringify(newTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
