import React from "react";
import { useNavigate } from "react-router-dom";
import { games } from "../data/games";
import { LogOut } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Or however you're storing auth tokens
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800 text-white px-6 py-8 relative">
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="z-50 absolute top-6 right-6 flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition font-semibold bg-zinc-800 border border-zinc-600 px-4 py-2 rounded-lg shadow hover:shadow-cyan-500/30"
      >
        <LogOut size={20} />
        Logout
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold text-cyan-400 text-center mb-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
        Choose a Game
      </h1>

      {/* Game Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-zinc-800 rounded-xl shadow-lg hover:shadow-cyan-500/30 cursor-pointer overflow-hidden transition transform hover:scale-105"
            onClick={() => navigate(`/game/${game.id}`)}
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-cyan-300 mb-1">
                {game.name}
              </h2>
              <p className="text-sm text-zinc-400 line-clamp-2">
                {game.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
