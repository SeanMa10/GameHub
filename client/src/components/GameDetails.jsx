import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { games } from "../data/games";

export default function GameDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = games.find((game) => game.id === parseInt(id));

  if (!game) {
    return <div className="text-white text-center">Game not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800 text-white px-6 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-cyan-400 hover:underline"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto bg-zinc-800 rounded-xl shadow-xl overflow-hidden border border-zinc-700">
        <img src={game.image} alt={game.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-cyan-300 mb-4">{game.name}</h1>
          <p className="mb-6 text-zinc-300">{game.description}</p>

          <h2 className="text-xl font-semibold text-cyan-400 mb-2">Achievements:</h2>
          <ul className="list-disc list-inside space-y-1">
            {game.achivements.map((ach, idx) => (
              <li key={idx}>
                <span className="text-cyan-300 font-semibold">{ach.name}:</span> {ach.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
