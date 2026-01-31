import type { FC } from "react";

export interface GameStatusProps {
  winner: string | null;
  isDraw: boolean;
  xIsNext: boolean;
  onRestart: () => void;
}

export const GameStatus: FC<GameStatusProps> = ({
  winner,
  isDraw,
  xIsNext,
  onRestart,
}) => {
  let statusMessage: string;
  let statusClass = "text-light";

  if (winner) {
    statusMessage = `Winner: ${winner}`;
    statusClass = "text-success";
  } else if (isDraw) {
    statusMessage = "Draw!";
    statusClass = "text-warning";
  } else {
    statusMessage = `Next turn: ${xIsNext ? "X" : "O"}`;
    statusClass = "text-light";
  }

  return (
    <div className="d-flex flex-column align-items-center gap-3 my-4">
      <h2 className={`h3 fw-bold ${statusClass}`}>{statusMessage}</h2>
      <button
        className="btn btn-primary px-4 py-2"
        onClick={onRestart}
        type="button"
      >
        Restart Game
      </button>
    </div>
  );
};

