import { Button } from "@/components/ui/button";
import { RotateCcw, RefreshCw } from "lucide-react";

interface GameControlsProps {
  onNewGame: () => void;
  onResetScores: () => void;
  gameOver: boolean;
}

const GameControls = ({ onNewGame, onResetScores, gameOver }: GameControlsProps) => {
  return (
    <div className="flex justify-center gap-3 sm:gap-4">
      <Button
        onClick={onNewGame}
        variant={gameOver ? "default" : "secondary"}
        size="lg"
        className="font-body gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        {gameOver ? "Play Again" : "New Game"}
      </Button>
      <Button
        onClick={onResetScores}
        variant="outline"
        size="lg"
        className="font-body gap-2"
      >
        <RefreshCw className="w-4 h-4" />
        Reset Scores
      </Button>
    </div>
  );
};

export default GameControls;
