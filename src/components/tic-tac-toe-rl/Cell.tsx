import React from 'react';
import { CellValue } from '../utils/ticTacToeLogic';

interface CellProps {
    value: CellValue;
    row: number;
    col: number;
    onClick: (row: number, col: number) => void;
    isWinningCell?: boolean;
    isHighlighted?: boolean;
}

const Cell: React.FC<CellProps> = ({
                                       value,
                                       row,
                                       col,
                                       onClick,
                                       isWinningCell = false,
                                       isHighlighted = false
                                   }) => {
    const getCellClasses = () => {
        const baseClasses = "w-20 h-20 border-2 border-gray-800 dark:border-gray-300 flex items-center justify-center text-3xl font-bold transition-colors duration-300";
        const cursorClass = value ? 'cursor-default' : 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600';
        
        let bgClass = 'bg-white dark:bg-gray-800';
        if (isWinningCell) {
            bgClass = 'bg-green-400 dark:bg-green-600';
        } else if (isHighlighted) {
            bgClass = 'bg-yellow-100 dark:bg-yellow-900';
        } else if (value === 'X') {
            bgClass = 'bg-blue-50 dark:bg-blue-900';
        } else if (value === 'O') {
            bgClass = 'bg-red-50 dark:bg-red-900';
        }
        
        return `${baseClasses} ${cursorClass} ${bgClass}`;
    };

    const handleClick = () => {
        if (!value) {
            onClick(row, col);
        }
    };

    return (
        <div
            className={getCellClasses()}
            onClick={handleClick}
        >
            {value === 'X' && <span className="text-blue-600 dark:text-blue-400">X</span>}
            {value === 'O' && <span className="text-red-600 dark:text-red-400">O</span>}
        </div>
    );
};

export default Cell;