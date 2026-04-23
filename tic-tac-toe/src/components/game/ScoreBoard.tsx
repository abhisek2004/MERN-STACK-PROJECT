import { cn } from "@/lib/utils";

interface ScoreBoardProps {
  scores: {
    X: number;
    O: number;
    draws: number;
  };
  currentPlayer: "X" | "O";
}

const ScoreBoard = ({ scores, currentPlayer }: ScoreBoardProps) => {
  return (
    <div className="flex justify-center gap-3 sm:gap-6 w-full max-w-md mx-auto">
      {/* Player X Score */}
      <div
        className={cn(
          "flex-1 p-3 sm:p-4 rounded-xl bg-card/60 backdrop-blur-sm border transition-all duration-300",
          currentPlayer === "X"
            ? "border-playerX/60 box-glow-x"
            : "border-gridLine/30"
        )}
      >
        <div className="text-center">
          <span className="text-2xl sm:text-3xl font-display font-bold text-playerX text-glow-x">
            X
          </span>
          <p className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-1">
            {scores.X}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground font-body">wins</p>
        </div>
      </div>

      {/* Draws */}
      <div className="flex-1 p-3 sm:p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-gridLine/30">
        <div className="text-center">
          <span className="text-2xl sm:text-3xl font-display font-bold text-muted-foreground">
            ═
          </span>
          <p className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-1">
            {scores.draws}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground font-body">draws</p>
        </div>
      </div>

      {/* Player O Score */}
      <div
        className={cn(
          "flex-1 p-3 sm:p-4 rounded-xl bg-card/60 backdrop-blur-sm border transition-all duration-300",
          currentPlayer === "O"
            ? "border-playerO/60 box-glow-o"
            : "border-gridLine/30"
        )}
      >
        <div className="text-center">
          <span className="text-2xl sm:text-3xl font-display font-bold text-playerO text-glow-o">
            O
          </span>
          <p className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-1">
            {scores.O}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground font-body">wins</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
