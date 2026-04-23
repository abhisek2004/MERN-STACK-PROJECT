import { cn } from "@/lib/utils";

interface GameStatusProps {
  winner: "X" | "O" | null;
  isDraw: boolean;
  currentPlayer: "X" | "O";
}

const GameStatus = ({ winner, isDraw, currentPlayer }: GameStatusProps) => {
  if (winner) {
    return (
      <div className="text-center animate-slide-up">
        <p className="text-lg sm:text-xl text-muted-foreground font-body mb-1">Winner</p>
        <span
          className={cn(
            "text-5xl sm:text-6xl font-display font-bold",
            winner === "X" && "text-playerX text-glow-x",
            winner === "O" && "text-playerO text-glow-o"
          )}
        >
          {winner}
        </span>
      </div>
    );
  }

  if (isDraw) {
    return (
      <div className="text-center animate-slide-up">
        <p className="text-2xl sm:text-3xl font-display font-bold text-muted-foreground">
          It's a Draw!
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <p className="text-lg sm:text-xl text-muted-foreground font-body mb-1">Current Turn</p>
      <span
        className={cn(
          "text-5xl sm:text-6xl font-display font-bold animate-pulse-glow",
          currentPlayer === "X" && "text-playerX text-glow-x",
          currentPlayer === "O" && "text-playerO text-glow-o"
        )}
      >
        {currentPlayer}
      </span>
    </div>
  );
};

export default GameStatus;
