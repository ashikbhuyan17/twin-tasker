'use client';
import React from 'react';
import { Trophy, RotateCcw, User, ArrowLeft } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { restartMatch, newMatch } from '@/store/gameSlice';
import { setView } from '@/store/viewSlice';
import { getWinner } from '@/lib/gameUtils';
import { useRouter } from 'next/navigation';

const VictoryScreen: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const players = useAppSelector((state) => state.game.players);

  const winner = getWinner(players.X, players.O);
  //   const isDraw = winner === null;

  const handleRestartMatch = () => {
    dispatch(restartMatch());
    dispatch(setView('game'));
    router.push('game');
  };

  const handleNewMatch = () => {
    dispatch(newMatch());
    dispatch(setView('setup'));
    router.push('setup');
  };
  const handleLeaderboard = () => {
    dispatch(setView('leaderboard'));
    router.push('leaderboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 to-orange-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        {winner ? (
          <>
            <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              🎉 Victory! 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              <span className="font-bold text-green-600">{winner.name}</span>{' '}
              wins the match!
            </p>
            <p className="text-gray-500 mb-8">First to reach 3 round wins</p>
          </>
        ) : (
          <>
            <div className="text-6xl mb-6">🤝</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              It&apos;aw!
            </h1>
            <p className="text-gray-500 mb-8">
              Both players reached the maximum rounds
            </p>
          </>
        )}

        {/* Final Scores */}
        <div className="bg-gray-50 rounded-lg p-4 mb-8">
          <h3 className="font-semibold mb-3">Final Scores:</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>{players.X.name} (X):</span>
              <span className="font-mono">
                {players.X.wins}W - {players.X.losses}L - {players.X.draws}D
              </span>
            </div>
            <div className="flex justify-between">
              <span>{players.O.name} (O):</span>
              <span className="font-mono">
                {players.O.wins}W - {players.O.losses}L - {players.O.draws}D
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleLeaderboard}
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Leaderboard
          </button>
          <button
            onClick={handleRestartMatch}
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Restart Match (Same Players)
          </button>
          <button
            onClick={handleNewMatch}
            className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <User className="w-5 h-5" />
            New Match (New Players)
          </button>
        </div>
      </div>
    </div>
  );
};

export default VictoryScreen;
