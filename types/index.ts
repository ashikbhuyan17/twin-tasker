export interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export type ProductInput = {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
};

export interface Player {
  name: string;
  symbol: 'X' | 'O';
  wins: number;
  losses: number;
  draws: number;
}

export interface GameState {
  board: (string | null)[];
  currentPlayer: 'X' | 'O';
  winner: string | null;
  isDraw: boolean;
  round: number;
  gamePhase: 'setup' | 'playing' | 'roundComplete' | 'gameComplete';
  players: {
    X: Player;
    O: Player;
  };
}

export type GameView = 'setup' | 'game' | 'leaderboard' | 'victory';
