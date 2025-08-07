/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { checkGameComplete } from '@/lib/gameUtils';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setView } from '@/store/viewSlice';
import React, { useEffect } from 'react';
import PlayerSetupPage from '../_components/pages/PlayerSetupPage';
import GamePage from '../_components/pages/GamePage';
import LeaderboardPage from '../_components/pages/LeaderboardPage';
import VictoryScreen from '../_components/pages/VictoryScreen';

export default function Home() {
  const dispatch = useAppDispatch();
  const currentView = useAppSelector((state) => state.view.currentView);
  const gameState = useAppSelector((state) => state.game);

  useEffect(() => {
    if (gameState.gamePhase === 'playing') {
      const isGameComplete = checkGameComplete(
        gameState.players.X,
        gameState.players.O,
        gameState.round
      );

      if (isGameComplete && currentView === 'game') {
        dispatch(setView('victory'));
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

  // Render appropriate page based on current view
  switch (currentView) {
    case 'setup':
      return <PlayerSetupPage />;
    case 'game':
      return <GamePage />;
    case 'leaderboard':
      return <LeaderboardPage />;
    case 'victory':
      return <VictoryScreen />;
    default:
      return <PlayerSetupPage />;
  }
}
