import {useState} from "react";
import {translations} from "./translations";

interface ProjectProps {
    language: 'en' | 'ge'
}

export default function Projects({ language }: ProjectProps) {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const t = translations[language];

    const projects = [
        {
            id: 'conc',
            name: t.concurrent,
            url: 'https://github.com/TheGuy-26/concurrent_virus_simulation/'
        },
        {
            id: 'bde',
            name: t.bde,
            url: 'https://github.com/ariv00001/BDE'
        },
        {
            id: 'sys1',
            name: t.sys1,
            url: 'https://github.com/TheGuy-26/sysarch-project-1'
        },
        {
            id: 'sys2',
            name: t.sys2,
            url: 'https://github.com/TheGuy-26/sysarch-project-2'
        },
        {
            id: 'ocaml',
            name: t.prog1,
            url: 'https://github.com/TheGuy-26/MiniOCaml'
        },
        {
            id: 'election',
            name: t.election_software,
            url: 'https://github.com/TheGuy-26/VotingSoftware'
        }
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* left columns */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold"> {t.projects} </h2>
                <ul className="space-y-2">
                    {projects.map((project) => (
                    <li key={project.id}>
                        <button
                            onClick={() => setSelectedProject(project.id)}
                            className={`w-full text-left p-3 rounded border transition-colors ${
                            selectedProject === project.id
                            ? 'bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700'
                        }`}
                        >
                            <div className="font-medium">{project.name}</div>
                        </button>
                    </li>
                    ))}
                    <li>
                        <span className="text-gray-600 dark:text-gray-300">{t.more}</span>
                    </li>
                </ul>
            </div>

            {/* right columns */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold opacity-0"> {t.projects} </h2>
                <div className="lg:sticky lg:top-4 lg:h-fit">
                    {selectedProject ? (
                        <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {t.project_descriptions[selectedProject as keyof typeof t.project_descriptions]}
                            </p>
                            <a
                                href={projects.find(p => p.id === selectedProject)?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                                View on GitHub →
                            </a>
                        </div>
                    ) : (
                        <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
                            {language === 'en' ? 'Select a project to view details' : 'Wählen Sie ein Projekt aus, um Details anzuzeigen'}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}