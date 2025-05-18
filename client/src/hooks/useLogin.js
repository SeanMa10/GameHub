// src/hooks/useLogin.js
import { useState } from "react";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // login function to be called from your component
  async function login(email, password) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/users/login", {
        // proxy handles base url
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save token to localStorage (or you can lift state up to context)
      localStorage.setItem("token", data.token);

      setLoading(false);
      return data; // return user/token data if needed
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err; // re-throw if you want to handle it outside too
    }
  }

  return { login, loading, error };
}
