import React from 'react'
import Header, {useLanguage} from './Header';
import {translations} from "./translations";
import Projects from "./Projects";

export default function App(): React.JSX.Element {
    const { language, toggle: toggleLanguage } = useLanguage();
    const t = translations[language]
  return (
      <>
          <Header language={language} toggleLanguage={toggleLanguage} />
          <main className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-white mx-auto p-8 leading-relaxed">
              <section className="space-y-6">
                  <p className="text-base">
                      { t.opening_line }
                  </p>
                  <Projects language={language} />
              </section>
          </main>
      </>
  )
}
