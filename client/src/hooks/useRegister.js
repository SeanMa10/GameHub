// client/src/hooks/useRegister.js
import { useState } from "react";

export default function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to register");
      }

      const data = await res.json();
      setLoading(false);
      return data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return null;
    }
  };

  return { register, loading, error };
}
