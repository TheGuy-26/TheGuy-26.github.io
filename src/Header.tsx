import {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";

function getInitialLanguage(): 'en' | 'ge' {
    try {
        // checks in the browser local storage (user's explicit choice. p.s.: local storage is domain specific )
        const storedLang = typeof window !== 'undefined'? localStorage.getItem('language'): null;
        if (storedLang === 'en' || storedLang === 'ge') return storedLang;

        // checks for user preferred language in the browser
        const primaryLanguage = typeof window !== 'undefined' && navigator.language? navigator.language : 'en';

        if (primaryLanguage.startsWith('de')) return 'ge'

        return 'en'
    }
    catch {
        return 'en';
    }
}

export function useLanguage() {
    const [language, setLanguage] = useState<'en' | 'ge'>(getInitialLanguage);

    useEffect(() => {
        try {
            localStorage.setItem('language', language);
        }
        catch {
            // ignoring write errors
        }
    }, [language]);

    const toggle = () => setLanguage(l => (l === 'en' ? 'ge' : 'en'));
    return { language, toggle };
}

// In your App:
interface HeaderProps {
    language: 'en' | 'ge';
    toggleLanguage: () => void;
}

export default function Header({ language, toggleLanguage }: HeaderProps) {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="flex items-center justify-between px-6 py-4 terminal-bg border-b border-green-500/20">
            <div className="flex items-center gap-4">
                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <span className="text-green-400 font-bold text-lg glow-green">$</span>
                    <h1 className="text-green-400 font-bold text-lg">dujana@portfolio:~</h1>
                </Link>
                <nav className="hidden md:flex items-center gap-4 ml-6">
                    <Link 
                        to="/" 
                        className={`text-sm transition-colors ${
                            isActive('/') 
                                ? 'text-green-300 border-b border-green-500' 
                                : 'text-green-400/70 hover:text-green-300'
                        }`}
                    >
                        ~/home
                    </Link>
                    <Link 
                        to="/projects" 
                        className={`text-sm transition-colors ${
                            isActive('/projects') 
                                ? 'text-green-300 border-b border-green-500' 
                                : 'text-green-400/70 hover:text-green-300'
                        }`}
                    >
                        ~/projects
                    </Link>
                    <Link 
                        to="/tictactoe" 
                        className={`text-sm transition-colors ${
                            isActive('/tictactoe') 
                                ? 'text-green-300 border-b border-green-500' 
                                : 'text-green-400/70 hover:text-green-300'
                        }`}
                    >
                        ./tic-tac-toe-rl
                    </Link>
                </nav>
            </div>
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={toggleLanguage}
                    aria-label="Toggle language"
                    className="px-3 py-1.5 text-green-400 hover:text-green-300 hover:bg-green-500/10 rounded border border-green-500/30 transition-colors"
                >
                    {language === 'en'? 'DE': 'EN'}
                </button>
            </div>
        </header>
    );
}