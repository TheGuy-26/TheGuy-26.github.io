import React from 'react';
import { useTicTacToe } from '../hooks/useTicTacToe';
import Board from '../components/tic-tac-toe-rl/Board';
import GameControls from '../components/tic-tac-toe-rl/GameControls';
import TrainingStats from '../components/tic-tac-toe-rl/TrainingStats';

const TicTacToeRL: React.FC = () => {
    const {
        gameState,
        makeMove,
        resetGame,
        trainAgent,
        playVsAI,
        playVsHuman,
        isTraining,
        isPlayingVsAI,
        trainingStats,
        trainingProgress,
        agentStats
    } = useTicTacToe();

    const getWinnerMessage = () => {
        if (!gameState.isGameOver) return null;
        
        if (gameState.winner === 'draw') {
            return 'Draw!';
        }
        return `${gameState.winner} wins!`;
    };

    return (
        <div className="w-full p-6 space-y-6">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Tic-Tac-Toe with Q-Learning
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Train an AI agent using reinforcement learning to play Tic-Tac-Toe
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Game Board */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <div className="mb-4 text-center">
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                {gameState.isGameOver ? (
                                    <span className={gameState.winner === 'X' ? 'text-blue-600 dark:text-blue-400' : 
                                                     gameState.winner === 'O' ? 'text-red-600 dark:text-red-400' : 
                                                     'text-gray-600 dark:text-gray-400'}>
                                        {getWinnerMessage()}
                                    </span>
                                ) : (
                                    <span>
                                        Current Player: <span className={gameState.currentPlayer === 'X' ? 'text-blue-600 dark:text-blue-400' : 'text-red-600 dark:text-red-400'}>
                                            {gameState.currentPlayer}
                                        </span>
                                    </span>
                                )}
                            </p>
                        </div>
                        <Board
                            board={gameState.board}
                            onCellClick={makeMove}
                        />
                    </div>

                    {/* Training Stats */}
                    {trainingStats.wins.length > 0 && (
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <TrainingStats
                                wins={trainingStats.wins}
                                losses={trainingStats.losses}
                                draws={trainingStats.draws}
                                episodeRewards={trainingStats.episodeRewards}
                            />
                        </div>
                    )}
                </div>

                {/* Controls */}
                <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <GameControls
                            onReset={resetGame}
                            onTrain={() => trainAgent(1000)}
                            onPlayVsAI={playVsAI}
                            onPlayVsHuman={playVsHuman}
                            isTraining={isTraining}
                            isPlayingVsAI={isPlayingVsAI}
                            trainingProgress={trainingProgress}
                        />
                    </div>

                    {/* Agent Stats */}
                    {agentStats.qTableSize > 0 && (
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                Agent Statistics
                            </h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Q-Table Size:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        {agentStats.qTableSize}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Epsilon (ε):</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        {agentStats.epsilon.toFixed(4)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TicTacToeRL;
