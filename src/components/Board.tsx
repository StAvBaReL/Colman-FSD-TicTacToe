import type { FC } from "react";
import { Square } from "./Square";

export interface BoardProps {
  squares: (string | null)[];
  onSquareClick: (index: number) => void;
  winningSquares?: number[] | null;
}

export const Board: FC<BoardProps> = ({
  squares,
  onSquareClick,
  winningSquares,
}) => {
  return (
    <div
      className="d-grid gap-0"
      style={{ gridTemplateColumns: "repeat(3, 1fr)", width: "fit-content" }}
    >
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onSquareClick={() => onSquareClick(index)}
          isWinningSquare={winningSquares?.includes(index) ?? false}
        />
      ))}
    </div>
  );
};
