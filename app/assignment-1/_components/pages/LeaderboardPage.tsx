import React from 'react';
import { Trophy, Home, RotateCcw } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { clearLeaderboard } from '@/store/gameSlice';
import { setView } from '@/store/viewSlice';

const LeaderboardPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const players = useAppSelector((state) => state.game.players);

  const playersArray = [players.X, players.O].sort((a, b) => b.wins - a.wins);

  const handleBackToGame = () => {
    dispatch(setView('game'));
  };

  const handleClearLeaderboard = () => {
    dispatch(clearLeaderboard());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800">Leaderboard</h1>
          </div>

          <div className="space-y-4 mb-8">
            {playersArray.map((player, index) => (
              <div
                key={player.symbol}
                className={`p-6 rounded-xl border-2 ${
                  index === 0
                    ? 'border-yellow-400 bg-yellow-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {index === 0 && (
                      <Trophy className="w-8 h-8 text-yellow-500" />
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {player.name} ({player.symbol})
                      </h3>
                      <p className="text-gray-600">
                        Total Games:{' '}
                        {player.wins + player.losses + player.draws}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-green-600 text-2xl">
                          {player.wins}
                        </div>
                        <div className="text-gray-500">Wins</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-red-600 text-2xl">
                          {player.losses}
                        </div>
                        <div className="text-gray-500">Losses</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-yellow-600 text-2xl">
                          {player.draws}
                        </div>
                        <div className="text-gray-500">Draws</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <button
              onClick={handleBackToGame}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Game
            </button>
            <button
              onClick={handleClearLeaderboard}
              className="w-full py-3 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Clear Leaderboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
