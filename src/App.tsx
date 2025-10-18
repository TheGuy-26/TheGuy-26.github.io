import React from 'react'
import Header, {useLanguage} from './Header';
import {translations} from "./translations";

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
                  <div>
                      <h1 className="text-2xl font-semibold mb-3"> {t.projects} </h1>
                      <ul className="list-none space-y-1">
                          <li>
                              <a className="text-blue-600 hover:underline" href="https://github.com/TheGuy-26/concurrent_virus_simulation/" target="_blank" rel="noopener noreferrer">
                                  { t.concurrent_project }
                              </a>
                          </li>
                          <li>
                              <a className="text-blue-600 hover:underline" href="https://github.com/ariv00001/BDE" target="_blank" rel="noopener noreferrer">
                                  { t.bde_project }
                              </a>
                          </li>
                          <li>
                              <a className="text-blue-600 hover:underline" href="https://github.com/TheGuy-26/sysarch-project-1" target="_blank" rel="noopener noreferrer">
                                  { t.sys1 }
                              </a>
                          </li>
                          <li>
                              <a className="text-blue-600 hover:underline" href="https://github.com/TheGuy-26/sysarch-project-2" target="_blank" rel="noopener noreferrer">
                                  { t.sys2 }
                              </a>
                          </li>
                          <li>
                              <a className="text-blue-600 hover:underline" href="https://github.com/TheGuy-26/MiniOCaml" target="_blank" rel="noopener noreferrer">
                                  { t.prog1 }
                              </a>
                          </li>
                          <li>
                              <a className="text-blue-600 hover:underline" href="https://github.com/TheGuy-26/VotingSoftware" target="_blank" rel="noopener noreferrer">
                                  { t.election_software }
                              </a>
                          </li>
                          <li>
                              <span className="text-gray-600 dark:text-gray-300">{t.more}</span>
                          </li>
                      </ul>
                  </div>
              </section>
          </main>
      </>
  )
}
