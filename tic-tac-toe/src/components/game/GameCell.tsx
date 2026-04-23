import { cn } from "@/lib/utils";

interface GameCellProps {
  value: "X" | "O" | null;
  onClick: () => void;
  isWinning: boolean;
  disabled: boolean;
}

const GameCell = ({ value, onClick, isWinning, disabled }: GameCellProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || value !== null}
      className={cn(
        "aspect-square w-full flex items-center justify-center",
        "bg-card/50 backdrop-blur-sm transition-all duration-200",
        "border border-gridLine/50 rounded-lg",
        "hover:bg-cellHover hover:border-gridLine",
        "disabled:cursor-not-allowed",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        isWinning && "animate-win-flash"
      )}
    >
      {value && (
        <span
          className={cn(
            "text-5xl sm:text-6xl md:text-7xl font-display font-bold animate-pop-in",
            value === "X" && "text-playerX text-glow-x",
            value === "O" && "text-playerO text-glow-o"
          )}
        >
          {value}
        </span>
      )}
    </button>
  );
};

export default GameCell;
