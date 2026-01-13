import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface TrainingStatsProps {
    wins: number[];
    losses: number[];
    draws: number[];
    episodeRewards: number[];
}

const TrainingStats: React.FC<TrainingStatsProps> = ({
                                                         wins,
                                                         losses,
                                                         draws,
                                                         episodeRewards
                                                     }) => {
    const episodes = Array.from({ length: wins.length }, (_, i) => i + 1);

    const resultsChartData = {
        labels: episodes.slice(-50), // Show last 50 episodes
        datasets: [
            {
                label: 'Wins',
                data: wins.slice(-50),
                borderColor: 'rgb(34, 197, 94)',
                backgroundColor: 'rgba(34, 197, 94, 0.5)',
            },
            {
                label: 'Losses',
                data: losses.slice(-50),
                borderColor: 'rgb(239, 68, 68)',
                backgroundColor: 'rgba(239, 68, 68, 0.5)',
            },
            {
                label: 'Draws',
                data: draws.slice(-50),
                borderColor: 'rgb(245, 158, 11)',
                backgroundColor: 'rgba(245, 158, 11, 0.5)',
            }
        ]
    };

    const rewardsChartData = {
        labels: episodes.slice(-50),
        datasets: [
            {
                label: 'Reward',
                data: episodeRewards.slice(-50),
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                tension: 0.4
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Training Progress',
            },
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="flex flex-col gap-5 p-5 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-4xl">
            <h3 className="m-0 text-gray-900 dark:text-white font-semibold">Training Statistics</h3>

            <div className="flex gap-5 flex-wrap">
                <div className="flex-1 min-w-[300px]">
                    <h4 className="m-0 mb-2 text-gray-600 dark:text-gray-400">Game Results</h4>
                    <Line data={resultsChartData} options={chartOptions} />
                </div>

                <div className="flex-1 min-w-[300px]">
                    <h4 className="m-0 mb-2 text-gray-600 dark:text-gray-400">Episode Rewards</h4>
                    <Line data={rewardsChartData} options={chartOptions} />
                </div>
            </div>

            <div className="flex gap-5 justify-center mt-2">
                <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                        {wins[wins.length - 1] || 0}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Last Win</div>
                </div>

                <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                        {losses[losses.length - 1] || 0}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Last Loss</div>
                </div>

                <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                        {draws[draws.length - 1] || 0}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Last Draw</div>
                </div>
            </div>
        </div>
    );
};

export default TrainingStats;