import { useState } from "react";

type Player = 'X' | 'O';
type Cell = Player | null;
type Board = Cell[];
type GameStatus = 'playing' | 'won' | 'draw';

const useGame = () => {
    const [board, setBoard] = useState<Board>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState<boolean>(true);
    const [gameStatus, setGameStatus] = useState<GameStatus>('playing');

    return { 
        board, 
        setBoard, 
        isXNext, 
        setIsXNext, 
        gameStatus, 
        setGameStatus 
    };
};

export default useGame;
