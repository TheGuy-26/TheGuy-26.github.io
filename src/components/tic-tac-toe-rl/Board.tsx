import React from 'react';
import Cell from './Cell';
import { BoardState, CellValue } from '../utils/ticTacToeLogic';

interface BoardProps {
    board: BoardState;
    onCellClick: (row: number, col: number) => void;
    winningCells?: Array<[number, number]>;
    highlightedCells?: Array<[number, number]>;
}

const Board: React.FC<BoardProps> = ({
                                         board,
                                         onCellClick,
                                         winningCells = [],
                                         highlightedCells = []
                                     }) => {
    const isWinningCell = (row: number, col: number) => {
        return winningCells.some(([r, c]) => r === row && c === col);
    };

    const isHighlightedCell = (row: number, col: number) => {
        return highlightedCells.some(([r, c]) => r === row && c === col);
    };

    return (
        <div className="flex flex-col items-center gap-1 p-5 bg-slate-50 dark:bg-gray-700 rounded-lg shadow-md">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-1">
                    {row.map((cell, colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            value={cell}
                            row={rowIndex}
                            col={colIndex}
                            onClick={onCellClick}
                            isWinningCell={isWinningCell(rowIndex, colIndex)}
                            isHighlighted={isHighlightedCell(rowIndex, colIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;