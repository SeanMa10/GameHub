// client/src/components/Register.jsx
import React, { useState } from "react";
import useRegister from "../hooks/useRegister";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;
  const { register, loading, error } = useRegister();

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await register(formData);
    if (result) {
      console.log("Registration successful:", result);
      // You can add redirect or reset form here
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800">
      <form
        onSubmit={onSubmit}
        className="bg-gradient-to-br from-zinc-800 to-zinc-900 text-white p-8 rounded-2xl shadow-2xl w-full max-w-sm space-y-6 border border-zinc-700 backdrop-blur-sm"
      >
        <h2 className="text-3xl font-extrabold text-center text-cyan-400 drop-shadow-glow">
          Create a New Account
        </h2>

        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
          placeholder="Username"
          className="w-full px-4 py-3 rounded-md bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
        />

        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
          className="w-full px-4 py-3 rounded-md bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          className="w-full px-4 py-3 rounded-md bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-md bg-cyan-500 hover:bg-cyan-600 transition text-black font-semibold shadow-md hover:shadow-cyan-500/50 disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {error && (
          <p className="text-center text-sm text-red-500 mt-2">{error}</p>
        )}

        <p className="text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <span className="text-cyan-400 cursor-pointer hover:underline">
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
}
