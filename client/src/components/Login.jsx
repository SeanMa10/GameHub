// client/src/components/Login.jsx
import React from 'react';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
