import { Player } from '@/types';
import React from 'react';

interface PlayerCardProps {
  player: Player;
  isCurrentPlayer?: boolean;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  player,
  isCurrentPlayer = false,
}) => {
  const bgColor = player.symbol === 'X' ? 'bg-blue-50' : 'bg-red-50';
  const textColor = player.symbol === 'X' ? 'text-blue-800' : 'text-red-800';
  const borderColor = isCurrentPlayer
    ? 'border-green-400 border-2'
    : 'border-gray-200';

  return (
    <div className={`text-center p-3 ${bgColor} rounded-lg ${borderColor}`}>
      <h3 className={`font-semibold ${textColor}`}>
        {player.name} ({player.symbol})
        {isCurrentPlayer && (
          <span className="ml-2 text-green-600">← Current</span>
        )}
      </h3>
      <p className="text-sm text-gray-600">
        W: {player.wins} | L: {player.losses} | D: {player.draws}
      </p>
    </div>
  );
};

export default PlayerCard;
