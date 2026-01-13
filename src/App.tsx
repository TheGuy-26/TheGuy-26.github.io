import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header, {useLanguage} from './Header';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import TicTacToeRL from './pages/TicTacToeRL';

export default function App(): React.JSX.Element {
    const { language, toggle: toggleLanguage } = useLanguage();
    
  return (
      <div className="min-h-screen terminal-bg text-green-400 dark:text-green-400">
          <Header language={language} toggleLanguage={toggleLanguage} />
          <main className="max-w-7xl mx-auto px-4 py-8">
              <div className="terminal-border rounded-lg p-6 scanline bg-black/50">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-green-500/30">
                      <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="ml-4 text-xs text-green-500/70">~/portfolio</span>
                  </div>
                  
                  {/* Routes */}
                  <Routes>
                      <Route path="/" element={<Home language={language} />} />
                      <Route path="/projects" element={<ProjectsPage language={language} />} />
                      <Route path="/tictactoe" element={<TicTacToeRL />} />
                  </Routes>
              </div>
          </main>
      </div>
  )
}
