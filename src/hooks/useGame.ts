import { useState } from "react";
import { checkWinner } from "../utils/gameUtils";
import type { Square } from "../utils/gameUtils";

type Player = 'X' | 'O';
type Cell = Player | null;
type Board = Cell[];
type GameStatus = 'playing' | 'won' | 'draw';

const useGame = () => {
    const [board, setBoard] = useState<Board>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState<boolean>(true);
    const [gameStatus, setGameStatus] = useState<GameStatus>('playing');

    const handleClick = (index: number): void => {
        if (board[index]) {
            return;
        }

        if (gameStatus !== 'playing') {
            return;
        }

        const newBoard = [...board];
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);

        const winnerResult = checkWinner(newBoard as Square[]);
        if (winnerResult) {
            setGameStatus('won');
            return;
        }

        if (newBoard.every(cell => cell !== null)) {
            setGameStatus('draw');
            return;
        }

        setIsXNext(!isXNext);
    };

    const reset = (): void => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setGameStatus('playing');
    };

    return {
        board,
        setBoard,
        isXNext,
        setIsXNext,
        gameStatus,
        setGameStatus,
        handleClick,
        reset
    };
};

export default useGame;
