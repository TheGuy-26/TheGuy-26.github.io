import React from 'react';
import { translations } from '../translations';
import { Link } from 'react-router-dom';

interface HomeProps {
    language: 'en' | 'ge';
}

export default function Home({ language }: HomeProps) {
    const t = translations[language];

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="space-y-4">
                <div className="flex items-start gap-2">
                    <span className="text-green-500">$</span>
                    <span className="text-green-400">cat about.txt</span>
                </div>
                <div className="ml-6 text-green-300/80 text-sm leading-relaxed">
                    {t.opening_line}
                </div>
            </div>

            {/* Quick Navigation */}
            <div className="space-y-4">
                <div className="flex items-start gap-2">
                    <span className="text-green-500">$</span>
                    <span className="text-green-400">ls</span>
                </div>
                <div className="ml-6 space-y-2">
                    <div className="text-cyan-400 text-sm">
                        <span className="text-green-500">→</span> {t.available_commands}
                    </div>
                    <div className="ml-4 space-y-1">
                        <Link 
                            to="/projects" 
                            className="block text-green-400 hover:text-green-300 hover:underline text-sm transition-colors"
                        >
                            <span className="text-green-500 mr-2">$</span>cd projects/
                        </Link>
                        <Link 
                            to="/tictactoe" 
                            className="block text-green-400 hover:text-green-300 hover:underline text-sm transition-colors"
                        >
                            <span className="text-green-500 mr-2">$</span>./tic-tac-toe-rl
                        </Link>
                    </div>
                </div>
            </div>

            {/* Skills Preview */}
            <div className="space-y-4">
                <div className="flex items-start gap-2">
                    <span className="text-green-500">$</span>
                    <span className="text-green-400">cat skills.txt | head -5</span>
                </div>
                <div className="ml-6 space-y-2">
                    <div className="text-cyan-400 text-sm">
                        <span className="text-green-500">→</span> {t.key_technologies}
                    </div>
                    <div className="ml-4 text-green-300/70 text-xs space-y-1">
                        <div>• React, TypeScript, Python, Rust, Java</div>
                        <div>• System Programming, Hardware Design</div>
                        <div>• Machine Learning, Reinforcement Learning</div>
                    </div>
                    <div className="mt-3">
                        <Link 
                            to="/projects" 
                            className="text-cyan-400 hover:text-cyan-300 text-xs underline"
                        >
                            {t.view_all_skills}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
