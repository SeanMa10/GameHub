// client/src/components/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Login successful!");
      navigate('/Dashboard');
      // redirect or update UI here
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      // error already set in the hook, optionally handle here
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-zinc-800 to-zinc-900 text-white p-8 rounded-2xl shadow-2xl w-full max-w-sm space-y-6 border border-zinc-700 backdrop-blur-sm"
      >
        <h2 className="text-3xl font-extrabold text-center text-cyan-400 drop-shadow-glow">
          Login to GameHub
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-md bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-md bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-md bg-cyan-500 hover:bg-cyan-600 transition text-black font-semibold shadow-md hover:shadow-cyan-500/50 disabled:opacity-50"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
        {error && (
          <p className="text-red-500 text-center font-semibold">{error}</p>
        )}
        <p className="text-center text-sm text-zinc-400">
          Don't have an account?{" "}
          <span className="text-cyan-400 cursor-pointer hover:underline" onClick={() => navigate("/register")}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}
