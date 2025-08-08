/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { checkGameComplete } from '@/lib/gameUtils';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setView } from '@/store/viewSlice';
import React, { useEffect } from 'react';
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
        router.push('/');
        break;
    }
  }, [currentView, router]);

  // Render appropriate page based on current view
  return (
    <div>
      <h1>Welcome to the Game Page</h1>
    </div>
  );
}
