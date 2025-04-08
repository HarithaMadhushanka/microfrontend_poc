import React, { useState, Suspense } from "react";
import MainLayout from "./components/MainLayout";
import LoginForm from "./components/LoginForm";
import { ThemeProvider } from "./context/ThemeContext";

const users = {
  test_user_1: {
    username: "test_user_1",
    password: "123",
    role: "general",
    theme: "dark",
  },
  admin: {
    username: "admin",
    password: "admin",
    role: "admin",
    theme: "light",
  },
};

function App() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogin = () => {
    const found = users[form.username];
    if (found && found.password === form.password) {
      setUser(found);
      localStorage.setItem("loggedInUser", JSON.stringify(found));
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setForm({ username: "", password: "" });
    localStorage.removeItem("loggedInUser");
  };

  return (
    <div className="App">
      <ThemeProvider>
        {!user ? (
          <LoginForm form={form} setForm={setForm} onLogin={handleLogin} />
        ) : (
          <MainLayout user={user} onLogout={handleLogout} />
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
