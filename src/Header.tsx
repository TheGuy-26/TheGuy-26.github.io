import {useEffect, useState} from "react";

function getInitialTheme(): 'light' | 'dark' {
    try {
        const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
        if (stored === 'dark' || stored === 'light') return stored;
        const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    } catch {
        return 'light';
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

// In your App:
export default function Header() {
    const { theme, toggle } = useTheme();
    return (
        <header className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700">
            <h1 className="text-lg font-semibold">Portfolio</h1>
            <button
                type="button"
                onClick={toggle}
                aria-pressed={theme === 'dark'}
                aria-label="Toggle dark mode"
                className="inline-flex items-center gap-2 rounded px-3 py-1.5
                           bg-slate-200 text-slate-900 hover:bg-slate-300
                           dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600"
            >
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
        </header>
    );
}