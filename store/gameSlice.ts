import { checkDraw, checkWinner } from '@/lib/gameUtils';
import { GameState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: GameState = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  isDraw: false,
  round: 1,
  gamePhase: 'setup',
  players: {
    X: { name: '', symbol: 'X', wins: 0, losses: 0, draws: 0 },
    O: { name: '', symbol: 'O', wins: 0, losses: 0, draws: 0 },
  },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayerNames: (
      state,
      action: PayloadAction<{ playerX: string; playerO: string }>
    ) => {
      state.players.X.name = action.payload.playerX;
      state.players.O.name = action.payload.playerO;
      state.gamePhase = 'playing';
    },

    makeMove: (state, action: PayloadAction<number>) => {
      const index = action.payload;

      // Check if move is valid
      if (state.board[index] || state.winner || state.isDraw) return;

      // Make the move
      state.board[index] = state.currentPlayer;

      // Check for winner
      const winner = checkWinner(state.board);
      const isDraw = checkDraw(state.board);

      if (winner) {
        state.winner = winner;
        // Update scores
        if (winner === 'X') {
          state.players.X.wins++;
          state.players.O.losses++;
        } else {
          state.players.O.wins++;
          state.players.X.losses++;
        }
      } else if (isDraw) {
        state.isDraw = true;
        state.players.X.draws++;
        state.players.O.draws++;
      } else {
        state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
      }
    },

    resetRound: (state) => {
      const shouldAdvanceRound = state.winner || state.isDraw;

      state.board = Array(9).fill(null);
      state.currentPlayer = 'X';
      state.winner = null;
      state.isDraw = false;

      if (shouldAdvanceRound) {
        state.round++;
      }
    },

    restartMatch: (state) => {
      state.board = Array(9).fill(null);
      state.currentPlayer = 'X';
      state.winner = null;
      state.isDraw = false;
      state.round = 1;
      state.gamePhase = 'playing';
      state.players.X.wins = 0;
      state.players.X.losses = 0;
      state.players.X.draws = 0;
      state.players.O.wins = 0;
      state.players.O.losses = 0;
      state.players.O.draws = 0;
    },

    newMatch: () =>
      {
        return { ...initialState };
      },

    clearLeaderboard: (state) => {
      state.players.X.wins = 0;
      state.players.X.losses = 0;
      state.players.X.draws = 0;
      state.players.O.wins = 0;
      state.players.O.losses = 0;
      state.players.O.draws = 0;
    },
  },
});

export const {
  setPlayerNames,
  makeMove,
  resetRound,
  restartMatch,
  newMatch,
  clearLeaderboard,
} = gameSlice.actions;

export default gameSlice.reducer;
