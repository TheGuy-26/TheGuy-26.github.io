import React from 'react';

interface GameControlsProps {
    onReset: () => void;
    onTrain: () => void;
    onPlayVsAI: () => void;
    onPlayVsHuman: () => void;
    isTraining: boolean;
    isPlayingVsAI: boolean;
    trainingProgress?: number;
}

const GameControls: React.FC<GameControlsProps> = ({
                                                       onReset,
                                                       onTrain,
                                                       onPlayVsAI,
                                                       onPlayVsHuman,
                                                       isTraining,
                                                       isPlayingVsAI,
                                                       trainingProgress = 0
                                                   }) => {
    return (
        <div className="flex flex-col gap-4 p-5 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-xs">
            <h3 className="m-0 mb-2 text-gray-900 dark:text-white font-semibold">Game Controls</h3>

            <div className="flex gap-2 flex-wrap">
                <button
                    onClick={onReset}
                    className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white border-none rounded cursor-pointer font-bold flex-1 transition-colors"
                >
                    Reset Game
                </button>

                <button
                    onClick={onPlayVsHuman}
                    disabled={isPlayingVsAI || isTraining}
                    className={`px-5 py-2 text-white border-none rounded font-bold flex-1 transition-colors ${
                        isPlayingVsAI || isTraining
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'
                    }`}
                >
                    Play vs Human
                </button>

                <button
                    onClick={onPlayVsAI}
                    disabled={isTraining}
                    className={`px-5 py-2 text-white border-none rounded font-bold flex-1 transition-colors ${
                        isTraining
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-green-500 hover:bg-green-600 cursor-pointer'
                    }`}
                >
                    Play vs AI
                </button>
            </div>

            <div>
                <button
                    onClick={onTrain}
                    disabled={isTraining}
                    className={`w-full py-3 bg-amber-500 hover:bg-amber-600 text-white border-none rounded font-bold mb-2 transition-colors ${
                        isTraining ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'
                    }`}
                >
                    {isTraining ? 'Training...' : 'Train AI'}
                </button>

                {isTraining && (
                    <div className="mt-2">
                        <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-green-500 transition-all duration-300"
                                style={{ width: `${trainingProgress}%` }}
                            />
                        </div>
                        <p className="text-center mt-1 text-sm text-gray-600 dark:text-gray-400">
                            {Math.round(trainingProgress)}%
                        </p>
                    </div>
                )}
            </div>

            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Click on an empty cell to make a move</p>
                <p>AI uses Q-learning with ε-greedy policy</p>
            </div>
        </div>
    );
};

export default GameControls;