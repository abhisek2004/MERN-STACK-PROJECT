import { useState, useCallback } from "react";

const WINNING_COMBINATIONS = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal top-left to bottom-right
  [2, 4, 6], // diagonal top-right to bottom-left
];

type Player = "X" | "O";
type Cell = Player | null;

interface GameState {
  board: Cell[];
  currentPlayer: Player;
  winner: Player | null;
  winningLine: number[] | null;
  isDraw: boolean;
  scores: {
    X: number;
    O: number;
    draws: number;
  };
}

const initialState: GameState = {
  board: Array(9).fill(null),
  currentPlayer: "X",
  winner: null,
  winningLine: null,
  isDraw: false,
  scores: {
    X: 0,
    O: 0,
    draws: 0,
  },
};

export const useTicTacToe = () => {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const checkWinner = useCallback((board: Cell[]): { winner: Player | null; line: number[] | null } => {
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a] as Player, line: combination };
      }
    }
    return { winner: null, line: null };
  }, []);

  const handleCellClick = useCallback((index: number) => {
    setGameState((prev) => {
      // Can't play if cell is occupied or game is over
      if (prev.board[index] || prev.winner || prev.isDraw) {
        return prev;
      }

      const newBoard = [...prev.board];
      newBoard[index] = prev.currentPlayer;

      const { winner, line } = checkWinner(newBoard);
      const isDraw = !winner && newBoard.every((cell) => cell !== null);

      const newScores = { ...prev.scores };
      if (winner) {
        newScores[winner] += 1;
      } else if (isDraw) {
        newScores.draws += 1;
      }

      return {
        ...prev,
        board: newBoard,
        currentPlayer: prev.currentPlayer === "X" ? "O" : "X",
        winner,
        winningLine: line,
        isDraw,
        scores: newScores,
      };
    });
  }, [checkWinner]);

  const startNewGame = useCallback(() => {
    setGameState((prev) => ({
      ...initialState,
      scores: prev.scores,
    }));
  }, []);

  const resetScores = useCallback(() => {
    setGameState(initialState);
  }, []);

  return {
    ...gameState,
    handleCellClick,
    startNewGame,
    resetScores,
    gameOver: gameState.winner !== null || gameState.isDraw,
  };
};
