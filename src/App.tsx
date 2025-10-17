import React from 'react'
import Header from './Header';

export default function App(): React.JSX.Element {
  return (
      <>
          <Header />
          <main className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-white mx-auto max-w-[680px] p-8 leading-relaxed">
              <section className="space-y-6">
                  <p className="text-base">
                      Hello there, I am <span className="font-semibold">Dujana</span>. I am a 4th semester student at Saarland University.
                  </p>
                  <div>
                      <h1 className="text-2xl font-semibold mb-3">My Programming Projects</h1>
                      <ul className="list-none space-y-1">
                          <li>
                              <a className="text-blue-600 hover:underline" href="https://github.com/TheGuy-26/VotingSoftware" target="_blank" rel="noopener noreferrer">
                                  School Election Software
                              </a>
                          </li>
                          <li>
                              <a className="text-blue-600 hover:underline" href="https://github.com/TheGuy-26/MiniOCaml" target="_blank" rel="noopener noreferrer">
                                  Mini OCaml Compiler
                              </a>
                          </li>
                          <li>
                              <a className="text-blue-600 hover:underline" href="https://github.com/TheGuy-26/concurrent_virus_simulation/pulse" target="_blank" rel="noopener noreferrer">
                                  Concurrent Virus Simulation
                              </a>
                          </li>
                          <li>
                              <span className="text-gray-600 dark:text-gray-300">and many more...</span>
                          </li>
                      </ul>
                  </div>
              </section>
          </main>
      </>
  )
}
