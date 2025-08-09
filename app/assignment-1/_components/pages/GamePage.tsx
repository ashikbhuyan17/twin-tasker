/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect } from 'react';
import { Trophy, RotateCcw } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { makeMove, resetRound } from '@/store/gameSlice';
import { setView } from '@/store/viewSlice';
import PlayerCard from '../ui/PlayerCard';
import GameBoard from '../ui/GameBoard';
import { useRouter } from 'next/navigation';
import { checkGameComplete } from '@/lib/gameUtils';

const GamePage: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const gameState = useAppSelector((state) => state.game);
  const currentView = useAppSelector((state) => state.view.currentView);

  useEffect(() => {
    if (gameState.gamePhase === 'playing') {
      const isGameComplete = checkGameComplete(
        gameState.players.X,
        gameState.players.O,
        gameState.round
      );
      console.log('🚀 ~ GamePage ~ isGameComplete:', isGameComplete);

      if (isGameComplete && currentView === 'game') {
        console.log(
          "🚀 ~ GamePage ~ isGameComplete && currentView === 'game':",
          isGameComplete && currentView === 'game'
        );
        dispatch(setView('victory'));
        router.push('victory');
      }
    }
  }, [
    gameState.players.X.wins,
    gameState.players.O.wins,
    gameState.round,
    gameState.gamePhase,
    currentView,
    dispatch,
  ]);
  const handleCellClick = (index: number) => {
    dispatch(makeMove(index));
  };

  const handleResetRound = () => {
    dispatch(resetRound());
  };

  const handleGoToLeaderboard = () => {
    dispatch(setView('leaderboard'));
    router.push('leaderboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-blue-900 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Round {gameState.round}
            </h1>
            <button
              onClick={handleGoToLeaderboard}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Trophy className="w-4 h-4" />
              Leaderboard
            </button>
          </div>

          {/* Score Display */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <PlayerCard
              player={gameState.players.X}
              isCurrentPlayer={
                gameState.currentPlayer === 'X' &&
                !gameState.winner &&
                !gameState.isDraw
              }
            />
            <PlayerCard
              player={gameState.players.O}
              isCurrentPlayer={
                gameState.currentPlayer === 'O' &&
                !gameState.winner &&
                !gameState.isDraw
              }
            />
          </div>

          {/* Current Turn */}
          {!gameState.winner && !gameState.isDraw && (
            <div className="text-center">
              <p className="text-lg">
                <span className="font-semibold">
                  {gameState.players[gameState.currentPlayer].name}&apos;s
                </span>{' '}
                turn ({gameState.currentPlayer})
              </p>
            </div>
          )}

          {/* Winner/Draw Display */}
          {gameState.winner && (
            <div className="text-center text-green-600 font-bold text-xl">
              🎉 {gameState.players[gameState.winner as 'X' | 'O'].name} wins
              this round!
            </div>
          )}
          {gameState.isDraw && (
            <div className="text-center text-yellow-600 font-bold text-xl">
              🤝 It&apos;s a draw!
            </div>
          )}
        </div>

        {/* Game Board */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <GameBoard
            board={gameState.board}
            onCellClick={handleCellClick}
            winner={gameState.winner}
          />
        </div>

        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <button
            onClick={handleResetRound}
            className="w-full py-3 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Reset Round
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
