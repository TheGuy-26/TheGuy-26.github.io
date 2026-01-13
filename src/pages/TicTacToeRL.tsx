import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../Header';
import { translations } from '../translations';
import { useTicTacToe } from '../hooks/useTicTacToe';
import Board from '../components/tic-tac-toe-rl/Board';
import GameControls from '../components/tic-tac-toe-rl/GameControls';
import TrainingStats from '../components/tic-tac-toe-rl/TrainingStats';

const TicTacToeRL: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language];
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
            <div className="mb-6">
                <div className="flex items-start gap-2 mb-2">
                    <span className="text-green-500">$</span>
                    <span className="text-green-400">./tic-tac-toe-rl</span>
                </div>
                <p className="ml-6 text-sm text-green-300/70 mb-4">
                    Training AI agent using Q-Learning...
                </p>
                <div className="ml-6">
                    <Link 
                        to="/projects" 
                        className="text-xs text-cyan-400 hover:text-cyan-300 underline"
                    >
                        ← {t.back_to_projects}
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Game Board */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="border border-green-500/30 bg-black/50 p-6">
                        <div className="mb-4">
                            <div className="flex items-start gap-2 mb-2">
                                <span className="text-green-500">→</span>
                                <p className="text-sm font-semibold text-green-300">
                                    {gameState.isGameOver ? (
                                        <span className={gameState.winner === 'X' ? 'text-cyan-400' : 
                                                         gameState.winner === 'O' ? 'text-red-400' : 
                                                         'text-yellow-400'}>
                                            {getWinnerMessage()}
                                        </span>
                                    ) : (
                                        <span>
                                            Current Player: <span className={gameState.currentPlayer === 'X' ? 'text-cyan-400' : 'text-red-400'}>
                                                {gameState.currentPlayer}
                                            </span>
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                        <Board
                            board={gameState.board}
                            onCellClick={makeMove}
                        />
                    </div>

                    {/* Training Stats */}
                    {trainingStats.wins.length > 0 && (
                        <div className="border border-green-500/30 bg-black/50 p-6">
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
                    <div className="border border-green-500/30 bg-black/50 p-6">
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
                        <div className="border border-green-500/30 bg-black/50 p-6">
                            <div className="flex items-start gap-2 mb-4">
                                <span className="text-green-500">→</span>
                                <h3 className="text-sm font-semibold text-green-300">
                                    Agent Statistics
                                </h3>
                            </div>
                            <div className="ml-6 space-y-2 text-xs">
                                <div className="flex justify-between">
                                    <span className="text-green-400/70">Q-Table Size:</span>
                                    <span className="font-semibold text-green-300">
                                        {agentStats.qTableSize}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-green-400/70">Epsilon (ε):</span>
                                    <span className="font-semibold text-green-300">
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
