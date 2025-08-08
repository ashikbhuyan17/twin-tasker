'use client';
import React, { useState } from 'react';
import { User, Play } from 'lucide-react';
import { useAppDispatch } from '@/store/hooks';
import { setPlayerNames } from '@/store/gameSlice';
import { setView } from '@/store/viewSlice';
import { useRouter } from 'next/navigation';

const PlayerSetupPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [playerXName, setPlayerXName] = useState('');
  const [playerOName, setPlayerOName] = useState('');

  const isValid = playerXName.trim() && playerOName.trim();

  const handleStartGame = () => {
    if (isValid) {
      dispatch(
        setPlayerNames({
          playerX: playerXName.trim(),
          playerO: playerOName.trim(),
        })
      );
      dispatch(setView('game'));
      router.push('game');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Tic-Tac-Toe</h1>
          <p className="text-gray-600">Enter player names to start</p>
        </div>

        <div className="space-y-6">
          <div>
            <div className="block text-sm font-medium text-gray-700 mb-2">
              <User className="inline w-4 h-4 mr-2" />
              Player X Name
            </div>
            <input
              type="text"
              value={playerXName}
              onChange={(e) => setPlayerXName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter name for Player X"
            />
          </div>

          <div>
            <div className="block text-sm font-medium text-gray-700 mb-2">
              <User className="inline w-4 h-4 mr-2" />
              Player O Name
            </div>
            <input
              type="text"
              value={playerOName}
              onChange={(e) => setPlayerOName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter name for Player O"
            />
          </div>

          <button
            onClick={handleStartGame}
            disabled={!isValid}
            className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
              isValid
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Play className="w-5 h-5" />
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerSetupPage;
