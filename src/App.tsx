import type { FC } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { GameStatus } from "./components/GameStatus";
import { useTicTacToe } from "./hooks/useTicTacToe";

export const App: FC = () => {
  const {
    squares,
    xIsNext,
    winner,
    winningLine,
    isDraw,
    handleSquareClick,
    handleRestart,
  } = useTicTacToe();

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-dark text-light">
      <h1 className="mb-4 fw-bold text-light">Tic-Tac-Toe</h1>

      <div className="card p-4 shadow-lg bg-dark border-secondary">
        <Board
          squares={squares}
          onSquareClick={handleSquareClick}
          winningSquares={winningLine}
        />

        <GameStatus
          winner={winner}
          isDraw={isDraw}
          xIsNext={xIsNext}
          onRestart={handleRestart}
        />
      </div>
    </div>
  );
};

