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
        <div className="flex flex-col gap-4 p-5 bg-black/30 border border-green-500/30 max-w-xs">
            <div className="flex items-start gap-2 mb-2">
                <span className="text-green-500">→</span>
                <h3 className="text-sm font-semibold text-green-300">Game Controls</h3>
            </div>

            <div className="flex gap-2 flex-wrap">
                <button
                    onClick={onReset}
                    className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/40 rounded cursor-pointer font-bold flex-1 transition-all text-sm"
                >
                    Reset Game
                </button>

                <button
                    onClick={onPlayVsHuman}
                    disabled={isPlayingVsAI || isTraining}
                    className={`px-4 py-2 border rounded font-bold flex-1 transition-all text-sm ${
                        isPlayingVsAI || isTraining
                            ? 'bg-gray-500/20 border-gray-500/40 text-gray-500 cursor-not-allowed'
                            : 'bg-cyan-500/20 hover:bg-cyan-500/30 border-cyan-500/40 text-cyan-400 cursor-pointer'
                    }`}
                >
                    Play vs Human
                </button>

                <button
                    onClick={onPlayVsAI}
                    disabled={isTraining}
                    className={`px-4 py-2 border rounded font-bold flex-1 transition-all text-sm ${
                        isTraining
                            ? 'bg-gray-500/20 border-gray-500/40 text-gray-500 cursor-not-allowed'
                            : 'bg-green-500/20 hover:bg-green-500/30 border-green-500/40 text-green-400 cursor-pointer'
                    }`}
                >
                    Play vs AI
                </button>
            </div>

            <div>
                <button
                    onClick={onTrain}
                    disabled={isTraining}
                    className={`w-full py-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 border border-yellow-500/40 rounded font-bold mb-2 transition-all text-sm ${
                        isTraining ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'
                    }`}
                >
                    {isTraining ? 'Training...' : 'Train AI'}
                </button>

                {isTraining && (
                    <div className="mt-2">
                        <div className="w-full h-3 bg-black/50 border border-green-500/30 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-green-500 transition-all duration-300"
                                style={{ width: `${trainingProgress}%` }}
                            />
                        </div>
                        <p className="text-center mt-1 text-xs text-green-400/70">
                            {Math.round(trainingProgress)}%
                        </p>
                    </div>
                )}
            </div>

            <div className="mt-2 text-xs text-green-400/60">
                <p>Click on an empty cell to make a move</p>
                <p>AI uses Q-learning with ε-greedy policy</p>
            </div>
        </div>
    );
};

export default GameControls;