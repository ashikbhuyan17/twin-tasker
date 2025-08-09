import React from 'react';

interface GameBoardProps {
  board: (string | null)[];
  onCellClick: (index: number) => void;
  winner: string | null;
}

const GameBoard: React.FC<GameBoardProps> = ({
  board,
  onCellClick,
  winner,
}) => {
  return (
    <div className="grid grid-cols-3 gap-2 w-[300px] h-[300px] mx-auto">
      {board.map((cell, index) => (
        <button
          key={index}
          onClick={() => onCellClick(index)}
          disabled={cell !== null || winner !== null}
          className={`
            w-[100px] h-[100px] border-2 border-gray-300 rounded-lg
            flex items-center justify-center text-4xl font-bold
            transition-all duration-200 hover:bg-gray-50
            ${
              cell !== null || winner !== null
                ? 'cursor-not-allowed'
                : 'cursor-pointer hover:border-blue-400'
            }
            ${cell === 'X' ? 'text-blue-600' : 'text-red-600'}
          `}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

export default GameBoard;
