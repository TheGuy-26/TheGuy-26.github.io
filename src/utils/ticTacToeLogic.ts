export type CellValue = 'X' | 'O' | null;
export type BoardState = CellValue[][];

export interface GameState {
    board: BoardState;
    currentPlayer: 'X' | 'O';
    winner: 'X' | 'O' | 'draw' | null;
    isGameOver: boolean;
}

export interface Move {
    row: number;
    col: number;
    index: number;
}

export class TicTacToeGame {
    private board: BoardState;
    private currentPlayer: 'X' | 'O';
    private winner: 'X' | 'O' | 'draw' | null;

    constructor() {
        this.board = Array(3).fill(null).map(() => Array(3).fill(null) as CellValue[]);
        this.currentPlayer = 'X';
        this.winner = null;
    }

    getState(): GameState {
        return {
            board: this.board.map(row => [...row]),
            currentPlayer: this.currentPlayer,
            winner: this.winner,
            isGameOver: this.winner !== null || this.isBoardFull()
        };
    }

    makeMove(row: number, col: number): boolean {
        if (this.board[row][col] !== null || this.winner !== null) {
            return false;
        }

        this.board[row][col] = this.currentPlayer;
        this.checkWinner();
        
        if (!this.isGameOver()) {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }

        return true;
    }

    getValidMoves(): Move[] {
        const moves: Move[] = [];
        let index = 0;
        
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (this.board[row][col] === null) {
                    moves.push({ row, col, index });
                }
                index++;
            }
        }
        
        return moves;
    }

    encodeState(): number {
        let state = 0;
        let multiplier = 1;
        
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const value = this.board[row][col];
                if (value === 'X') {
                    state += multiplier * 1;
                } else if (value === 'O') {
                    state += multiplier * 2;
                }
                multiplier *= 3;
            }
        }
        
        return state;
    }

    reset(): void {
        this.board = Array(3).fill(null).map(() => Array(3).fill(null) as CellValue[]);
        this.currentPlayer = 'X';
        this.winner = null;
    }

    private checkWinner(): void {
        // Check rows
        for (let row = 0; row < 3; row++) {
            if (this.board[row][0] && 
                this.board[row][0] === this.board[row][1] && 
                this.board[row][1] === this.board[row][2]) {
                this.winner = this.board[row][0];
                return;
            }
        }

        // Check columns
        for (let col = 0; col < 3; col++) {
            if (this.board[0][col] && 
                this.board[0][col] === this.board[1][col] && 
                this.board[1][col] === this.board[2][col]) {
                this.winner = this.board[0][col];
                return;
            }
        }

        // Check diagonals
        if (this.board[0][0] && 
            this.board[0][0] === this.board[1][1] && 
            this.board[1][1] === this.board[2][2]) {
            this.winner = this.board[0][0];
            return;
        }

        if (this.board[0][2] && 
            this.board[0][2] === this.board[1][1] && 
            this.board[1][1] === this.board[2][0]) {
            this.winner = this.board[0][2];
            return;
        }

        // Check for draw
        if (this.isBoardFull()) {
            this.winner = 'draw';
        }
    }

    private isBoardFull(): boolean {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (this.board[row][col] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    private isGameOver(): boolean {
        return this.winner !== null || this.isBoardFull();
    }
}
