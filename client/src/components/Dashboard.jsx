import React from "react";
import { useNavigate } from "react-router-dom";
import { games } from "../data/games";


export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800 text-white px-6 py-8">
      {/* כותרת */}
      <h1 className="text-4xl font-bold text-cyan-400 text-center mb-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
        Choose a Game
      </h1>

      {/* גריד של קלפים */}
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
