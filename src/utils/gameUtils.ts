export type Square = 'X' | 'O' | null;

export interface WinnerResult {
    winner: 'X' | 'O';
    winningIndices: number[];
}

const WINNING_COMBINATIONS: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export const checkWinner = (squares: Square[]): WinnerResult | null => {
    for (const combination of WINNING_COMBINATIONS) {
        const [a, b, c] = combination;
        
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return {
                winner: squares[a] as 'X' | 'O',
                winningIndices: combination,
            };
        }
    }
    
    return null;
};
