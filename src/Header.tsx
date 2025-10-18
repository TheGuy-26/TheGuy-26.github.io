import {useEffect, useState} from "react";

function getInitialTheme(): 'light' | 'dark' {
    try {
        const storedTheme = typeof window !== 'undefined'? localStorage.getItem('theme'): null;
        if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme;
        const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    } catch {
        return 'light';
    }
}

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

export function useTheme() {
    const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
        try {
            localStorage.setItem('theme', theme);
        } catch {
            // ignore write errors (e.g., private mode)
        }
    }, [theme]);

    const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
    return { theme, toggle };
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
    const { theme, toggle: toggleTheme } = useTheme();

    return (
        <header className="flex items-center justify-between px-5 py-5 bg-white text-black dark:bg-black dark:text-white">
            <h1 className="text-lg">Dujana Abrar</h1>
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={toggleLanguage}
                    aria-label="Toggle language"
                    className="px-3 py-1.5"
                >
                    {language === 'en'? 'DE': 'EN'}
                </button>
                <button
                    type="button"
                    onClick={toggleTheme}
                    aria-pressed={theme === 'dark'}
                    aria-label="Toggle dark mode"
                    className="px-3 py-1.5"
                >
                {theme === 'dark' ?
                    (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    )
                    :
                    (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    )
                }
                </button>
            </div>
        </header>
    );
}