import Cookies from 'js-cookie';
import { GameState } from '@/types';

const COOKIE_KEY = 'ticTacToeState';

export const saveGameState = (state: GameState) => {
  if (typeof window === 'undefined') return;
  Cookies.set(COOKIE_KEY, JSON.stringify(state), { expires: 7 }); 
};

export const loadGameState = (): GameState | null => {
  if (typeof window === 'undefined') return null;
  const savedState = Cookies.get(COOKIE_KEY);
  console.log('🚀 ~ loadGameState ~ savedState:', savedState);
  return savedState ? JSON.parse(savedState) : null;
};

export const clearGameState = () => {
  if (typeof window === 'undefined') return;
  Cookies.remove(COOKIE_KEY);
};
