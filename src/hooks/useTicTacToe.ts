import { useState } from "react";

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export const useTicTacToe = () => {
    const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState<boolean>(true);

    const calculateWinner = (squares: (string | null)[]) => {
        for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
            const [a, b, c] = WINNING_COMBINATIONS[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line: WINNING_COMBINATIONS[i] };
            }
        }
        return null;
    };

    const winInfo = calculateWinner(squares);
    const winner = winInfo?.winner || null;
    const winningLine = winInfo?.line || null;
    const isDraw = !winner && squares.every((square) => square !== null);

    const handleSquareClick = (index: number) => {
        if (squares[index] || winner) return;

        const nextSquares = squares.slice();
        nextSquares[index] = xIsNext ? "X" : "O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    };

    const handleRestart = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    };

    return {
        squares,
        xIsNext,
        winner,
        winningLine,
        isDraw,
        handleSquareClick,
        handleRestart,
    };
};

