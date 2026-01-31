import type { FC } from "react";

export interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
  isWinningSquare?: boolean;
}

export const Square: FC<SquareProps> = ({
  value,
  onSquareClick,
  isWinningSquare = false,
}) => {
  const getTextColorClass = () => {
    if (isWinningSquare) return "";
    if (value === "X") return "text-primary";
    if (value === "O") return "text-danger";
    return "";
  };

  return (
    <button
      className={`btn ${isWinningSquare ? "btn-success" : "btn-light"} border border-secondary fw-bold fs-1 m-0 p-0 d-flex justify-content-center align-items-center ${getTextColorClass()}`}
      style={{ width: "6rem", height: "6rem" }}
      onClick={onSquareClick}
      type="button"
    >
      {value}
    </button>
  );
};
