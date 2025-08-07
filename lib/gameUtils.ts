import { Player } from "@/types";


export const checkWinner = (board: (string | null)[]): string | null => {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (const [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export const checkDraw = (board: (string | null)[]): boolean => {
  return board.every(cell => cell !== null);
};

export const checkGameComplete = (
  playerX: Player, 
  playerO: Player, 
  currentRound: number
): boolean => {
  // Check if someone has 3 wins (first to 3 wins rule)
  if (playerX.wins >= 3 || playerO.wins >= 3) {
    return true;
  }
  
  // Check for unbeatable lead
  const roundsRemaining = 5 - currentRound + 1;
  const leadDifference = Math.abs(playerX.wins - playerO.wins);
  if (leadDifference > roundsRemaining) {
    return true;
  }
  
  // Check if we've completed 5 rounds
  if (currentRound > 5) {
    return true;
  }
  
  return false;
};

export const getWinner = (playerX: Player, playerO: Player): Player | null => {
  if (playerX.wins > playerO.wins) return playerX;
  if (playerO.wins > playerX.wins) return playerO;
  return null;
};
