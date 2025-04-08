import React from "react";

const LoginForm = ({ form, setForm, onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-800 flex items-center justify-center px-4">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl rounded-3xl p-8 max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Sign In
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/20 placeholder-gray-300 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/20 placeholder-gray-300 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          />

          <button
            onClick={onLogin}
            className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-xl transition shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          Demo login: <strong>test_user_1 / 123</strong> or{" "}
          <strong>admin / admin</strong>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
