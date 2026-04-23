import GameCell from "./GameCell";
import WinningLine from "./WinningLine";

interface GameBoardProps {
  board: (string | null)[];
  onCellClick: (index: number) => void;
  winningLine: number[] | null;
  winner: "X" | "O" | null;
  disabled: boolean;
}

const GameBoard = ({ board, onCellClick, winningLine, winner, disabled }: GameBoardProps) => {
  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] mx-auto">
      <WinningLine winningLine={winningLine} winner={winner} />
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {board.map((cell, index) => (
          <GameCell
            key={index}
            value={cell as "X" | "O" | null}
            onClick={() => onCellClick(index)}
            isWinning={winningLine?.includes(index) ?? false}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
