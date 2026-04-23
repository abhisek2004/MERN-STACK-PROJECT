import { cn } from "@/lib/utils";

interface WinningLineProps {
  winningLine: number[] | null;
  winner: "X" | "O" | null;
}

const getLineStyles = (line: number[]): { className: string; style?: React.CSSProperties } => {
  const [a, b, c] = line;

  // Rows
  if (a === 0 && b === 1 && c === 2) return { className: "winning-line-horizontal top-[16.67%]" };
  if (a === 3 && b === 4 && c === 5) return { className: "winning-line-horizontal top-[50%]" };
  if (a === 6 && b === 7 && c === 8) return { className: "winning-line-horizontal top-[83.33%]" };

  // Columns
  if (a === 0 && b === 3 && c === 6) return { className: "winning-line-vertical left-[16.67%]" };
  if (a === 1 && b === 4 && c === 7) return { className: "winning-line-vertical left-[50%]" };
  if (a === 2 && b === 5 && c === 8) return { className: "winning-line-vertical left-[83.33%]" };

  // Diagonals
  if (a === 0 && b === 4 && c === 8) return { className: "winning-line-diagonal-main" };
  if (a === 2 && b === 4 && c === 6) return { className: "winning-line-diagonal-anti" };

  return { className: "" };
};

const WinningLine = ({ winningLine, winner }: WinningLineProps) => {
  if (!winningLine || !winner) return null;

  const { className } = getLineStyles(winningLine);

  return (
    <div
      className={cn(
        "absolute pointer-events-none z-10",
        "animate-line-draw",
        winner === "X" ? "bg-playerX box-glow-x" : "bg-playerO box-glow-o",
        className
      )}
    />
  );
};

export default WinningLine;
