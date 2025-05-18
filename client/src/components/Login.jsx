// client/src/components/Login.jsx
import React from 'react';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800">
      <form className="bg-gradient-to-br from-zinc-800 to-zinc-900 text-white p-8 rounded-2xl shadow-2xl w-full max-w-sm space-y-6 border border-zinc-700 backdrop-blur-sm">
        <h2 className="text-3xl font-extrabold text-center text-cyan-400 drop-shadow-glow">
          Login to GameHub
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-md bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-md bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-cyan-500 hover:bg-cyan-600 transition text-black font-semibold shadow-md hover:shadow-cyan-500/50"
        >
          Sign In
        </button>
        <p className="text-center text-sm text-zinc-400">
          Don't have an account? <span className="text-cyan-400 cursor-pointer hover:underline">Sign Up</span>
        </p>
      </form>
    </div>
  );
}
