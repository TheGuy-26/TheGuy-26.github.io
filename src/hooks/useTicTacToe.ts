import { useState, useEffect, useCallback } from 'react';
import { TicTacToeGame, GameState } from '../utils/ticTacToeLogic';

// Simple Q-learning implementation for the web
class QLearningAgent {
    private qTable: Map<number, number[]>;
    private alpha: number;
    private gamma: number;
    private epsilon: number;
    private epsilonDecay: number;
    private epsilonMin: number;

    constructor(alpha = 0.1, gamma = 0.9, epsilon = 0.1, epsilonDecay = 0.995, epsilonMin = 0.01) {
        this.qTable = new Map();
        this.alpha = alpha;
        this.gamma = gamma;
        this.epsilon = epsilon;
        this.epsilonDecay = epsilonDecay;
        this.epsilonMin = epsilonMin;
    }

    getQValue(state: number, action: number): number {
        const key = state * 10 + action; // Simple key generation
        if (!this.qTable.has(key)) {
            this.qTable.set(key, 0);
        }
        return this.qTable.get(key)!;
    }

    setQValue(state: number, action: number, value: number): void {
        const key = state * 10 + action;
        this.qTable.set(key, value);
    }

    chooseAction(state: number, validActions: number[]): number {
        if (Math.random() < this.epsilon) {
            // Exploration: random valid action
            return validActions[Math.floor(Math.random() * validActions.length)];
        }

        // Exploitation: best known action
        let bestAction = validActions[0];
        let bestValue = -Infinity;

        for (const action of validActions) {
            const value = this.getQValue(state, action);
            if (value > bestValue) {
                bestValue = value;
                bestAction = action;
            }
        }

        return bestAction;
    }

    update(state: number, action: number, reward: number, nextState: number, nextValidActions: number[]): void {
        const currentQ = this.getQValue(state, action);

        // Calculate max Q for next state
        let maxNextQ = 0;
        if (nextValidActions.length > 0) {
            maxNextQ = Math.max(...nextValidActions.map(a => this.getQValue(nextState, a)));
        }

        const newQ = currentQ + this.alpha * (reward + this.gamma * maxNextQ - currentQ);
        this.setQValue(state, action, newQ);

        // Decay epsilon
        this.epsilon = Math.max(this.epsilonMin, this.epsilon * this.epsilonDecay);
    }

    getStats() {
        return {
            qTableSize: this.qTable.size,
            epsilon: this.epsilon
        };
    }
}

export const useTicTacToe = () => {
    const [game] = useState(() => new TicTacToeGame());
    const [gameState, setGameState] = useState<GameState>(game.getState());
    const [isTraining, setIsTraining] = useState(false);
    const [isPlayingVsAI, setIsPlayingVsAI] = useState(false);
    const [agent] = useState(() => new QLearningAgent());
    const [trainingStats, setTrainingStats] = useState({
        wins: [] as number[],
        losses: [] as number[],
        draws: [] as number[],
        episodeRewards: [] as number[]
    });
    const [trainingProgress, setTrainingProgress] = useState(0);

    const updateGameState = useCallback(() => {
        setGameState(game.getState());
    }, [game]);

    const makeMove = useCallback((row: number, col: number) => {
        if (game.makeMove(row, col)) {
            updateGameState();

            // If playing vs AI and it's AI's turn
            if (isPlayingVsAI && !gameState.isGameOver && gameState.currentPlayer === 'O') {
                setTimeout(() => {
                    const validMoves = game.getValidMoves();
                    if (validMoves.length > 0) {
                        const state = game.encodeState();
                        const actionIndex = agent.chooseAction(
                            state,
                            validMoves.map(m => m.index)
                        );
                        const action = validMoves.find(m => m.index === actionIndex);
                        if (action) {
                            game.makeMove(action.row, action.col);
                            updateGameState();
                        }
                    }
                }, 500);
            }
        }
    }, [game, updateGameState, isPlayingVsAI, gameState.currentPlayer, gameState.isGameOver, agent]);

    const resetGame = useCallback(() => {
        game.reset();
        updateGameState();
    }, [game, updateGameState]);

    const trainAgent = useCallback(async (episodes = 1000) => {
        setIsTraining(true);
        setTrainingProgress(0);

        const wins: number[] = [];
        const losses: number[] = [];
        const draws: number[] = [];
        const episodeRewards: number[] = [];

        for (let episode = 0; episode < episodes; episode++) {
            game.reset();
            let episodeReward = 0;
            let win = 0;
            let loss = 0;
            let draw = 0;

            while (!game.getState().isGameOver) {
                const state = game.encodeState();
                const validMoves = game.getValidMoves();

                // Agent's move (as X)
                const actionIndex = agent.chooseAction(state, validMoves.map(m => m.index));
                const action = validMoves.find(m => m.index === actionIndex)!;
                game.makeMove(action.row, action.col);

                // Check if game ended
                const currentState = game.getState();
                if (currentState.isGameOver) {
                    let reward = 0;
                    if (currentState.winner === 'X') {
                        reward = 1;
                        win = 1;
                    } else if (currentState.winner === 'draw') {
                        reward = 0.1;
                        draw = 1;
                    } else {
                        reward = -1;
                        loss = 1;
                    }

                    const nextState = game.encodeState();
                    agent.update(state, actionIndex, reward, nextState, []);
                    episodeReward += reward;
                    break;
                }

                // Opponent's move (random, as O)
                const opponentValidMoves = game.getValidMoves();
                if (opponentValidMoves.length > 0) {
                    const randomMove = opponentValidMoves[Math.floor(Math.random() * opponentValidMoves.length)];
                    game.makeMove(randomMove.row, randomMove.col);
                }

                // Get reward for agent's move
                const nextState = game.encodeState();
                const nextValidMoves = game.getValidMoves().map(m => m.index);

                let reward = 0;
                const newGameState = game.getState();
                if (newGameState.isGameOver) {
                    if (newGameState.winner === 'X') {
                        reward = 1;
                        win = 1;
                    } else if (newGameState.winner === 'draw') {
                        reward = 0.1;
                        draw = 1;
                    } else {
                        reward = -1;
                        loss = 1;
                    }
                }

                agent.update(state, actionIndex, reward, nextState, nextValidMoves);
                episodeReward += reward;
            }

            wins.push(win);
            losses.push(loss);
            draws.push(draw);
            episodeRewards.push(episodeReward);

            // Update progress every 10 episodes
            if (episode % 10 === 0) {
                setTrainingProgress((episode / episodes) * 100);
                setTrainingStats({
                    wins: [...wins],
                    losses: [...losses],
                    draws: [...draws],
                    episodeRewards: [...episodeRewards]
                });

                // Small delay to allow UI updates
                await new Promise(resolve => setTimeout(resolve, 10));
            }
        }

        setTrainingProgress(100);
        setIsTraining(false);
    }, [game, agent]);

    const playVsAI = useCallback(() => {
        setIsPlayingVsAI(true);
        resetGame();
    }, [resetGame]);

    const playVsHuman = useCallback(() => {
        setIsPlayingVsAI(false);
        resetGame();
    }, [resetGame]);

    useEffect(() => {
        updateGameState();
    }, [updateGameState]);

    return {
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
        agentStats: agent.getStats()
    };
};