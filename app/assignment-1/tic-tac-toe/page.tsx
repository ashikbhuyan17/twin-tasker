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
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
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

  // Redirect based on the current view state
  useEffect(() => {
    switch (currentView) {
      case 'game':
        router.push('tic-tac-toe/game');
        break;
      case 'leaderboard':
        router.push('tic-tac-toe/leaderboard');
        break;
      case 'victory':
        router.push('tic-tac-toe/victory');
        break;
      case 'setup':
        router.push('tic-tac-toe/setup');
        break;
      default:
        // By default, or if the view is 'setup', we'll stay on the home page.
        // This assumes the root '/' page is the setup page.
        router.push('/');
        break;
    }
  }, [currentView, router]);

  //   switch (currentView) {
  //   case 'setup':
  //     return <PlayerSetupPage />;
  //   case 'game':
  //     return <GamePage />;
  //   case 'leaderboard':
  //     return <LeaderboardPage />;
  //   case 'victory':
  //     return <VictoryScreen />;
  //   default:
  //     return <PlayerSetupPage />;
  // }

  // Render appropriate page based on current view
  return (
    <div>
      <h1>Welcome to the Game Setup</h1>
      {/* Any setup-specific UI can go here */}
    </div>
  );
}
