import type { FC } from "react";

export interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
  isWinningSquare?: boolean;
}

const Square: FC<SquareProps> = ({
  value,
  onSquareClick,
  isWinningSquare = false,
}) => {
  return (
    <button
      className={`btn ${isWinningSquare ? "btn-success" : "btn-light"} border border-secondary fw-bold fs-1 m-0 p-0 d-flex justify-content-center align-items-center`}
      style={{ width: "6rem", height: "6rem" }}
      onClick={onSquareClick}
      type="button"
    >
      {value}
    </button>
  );
};

export default Square;
