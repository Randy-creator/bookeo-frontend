"use client";

import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState(""); // username au lieu d'email
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // car @RequestParam attend des params
        },
        body: new URLSearchParams({
          username,
          password,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Login failed");
      }

      const user = await res.json();
      console.log("Logged in user:", user);

      // TODO: stocker le user/token (localStorage ou contexte)
      alert(`Welcome ${user.username}!`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto p-8">
      <h2 className="w-screen text-3xl font-bold mb-2 text-gray-900 text-center">
        Welcome back to Bookeo
      </h2>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Sign in to manage your library efficiently.
      </p>

      <form className="w-full" onSubmit={handleSubmit}>
        {error && <div className="mb-4 text-red-600">{error}</div>}

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-purple-600 border-gray-300 rounded"
            />
            <span>Remember me</span>
          </label>
          <a href="#" className="text-purple-600 text-sm hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <a href="#" className="text-purple-600 hover:underline">
          Sign up
        </a>
      </div>
    </div>
  );
}
