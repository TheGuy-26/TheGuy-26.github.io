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
        const baseClasses = "w-20 h-20 border-2 border-green-500/40 flex items-center justify-center text-3xl font-bold transition-all duration-300";
        const cursorClass = value ? 'cursor-default' : 'cursor-pointer hover:bg-green-500/20 hover:border-green-500/60';
        
        let bgClass = 'bg-black/50';
        if (isWinningCell) {
            bgClass = 'bg-green-500/30 border-green-500 glow-green';
        } else if (isHighlighted) {
            bgClass = 'bg-yellow-500/20 border-yellow-500/50';
        } else if (value === 'X') {
            bgClass = 'bg-cyan-500/10 border-cyan-500/40';
        } else if (value === 'O') {
            bgClass = 'bg-red-500/10 border-red-500/40';
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
            {value === 'X' && <span className="text-cyan-400 glow-cyan">X</span>}
            {value === 'O' && <span className="text-red-400">O</span>}
        </div>
    );
};

export default Cell;