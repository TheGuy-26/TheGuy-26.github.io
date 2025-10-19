import { useState, useRef } from "react";
import { translations } from "./translations";

interface ProjectProps {
    language: 'en' | 'ge'
}

// Constants
const SCROLL_DELAY_MS = 100;
const MOBILE_BREAKPOINT = 1024;

// skill colors
const SKILL_COLORS = {
    rust: "text-red-600 dark:text-red-400 font-semibold",
    java: "text-orange-600 dark:text-orange-400 font-semibold",
    python: "text-blue-600 dark:text-blue-400 font-semibold",
    javascript: "text-yellow-600 dark:text-yellow-500 font-semibold",
    ocaml: "text-blue-700 dark:text-blue-300 font-semibold",
    django: "text-green-700 dark:text-green-400 font-semibold",
    scala: "text-red-700 dark:text-red-300 font-semibold",
    chisel: "text-purple-600 dark:text-purple-400 font-semibold",
    "risc-v": "text-indigo-600 dark:text-indigo-400 font-semibold",
};

export default function Projects({ language }: ProjectProps) {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const stickyElementRef = useRef<HTMLDivElement>(null);
    const t = translations[language];

    const projects = [
        {
            id: 'conc',
            name: t.concurrent,
            url: 'https://github.com/TheGuy-26/concurrent_virus_simulation/',
            skills: ['rust']
        },
        {
            id: 'bde',
            name: t.bde,
            url: 'https://github.com/ariv00001/BDE',
            skills: ['python', 'django']
        },
        {
            id: 'sys1',
            name: t.sys1,
            url: 'https://github.com/TheGuy-26/sysarch-project-1',
            skills: ['scala', 'chisel']
        },
        {
            id: 'sys2',
            name: t.sys2,
            url: 'https://github.com/TheGuy-26/sysarch-project-2',
            skills: ['RISC-V']
        },
        {
            id: 'ocaml',
            name: t.prog1,
            url: 'https://github.com/TheGuy-26/MiniOCaml',
            skills: ['ocaml']
        },
        {
            id: 'election',
            name: t.election_software,
            url: 'https://github.com/TheGuy-26/VotingSoftware',
            skills: ['java']
        }
    ];

    const handleProjectSelect = (projectId: string) => {
        setSelectedProject(projectId);

        // scroll on mobile
        if (window.innerWidth < MOBILE_BREAKPOINT) {
            setTimeout(() => {
                stickyElementRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, SCROLL_DELAY_MS);
        }
    };

    const getSkillColor = (skill: string) => {
        return SKILL_COLORS[skill as keyof typeof SKILL_COLORS] || "text-gray-600 dark:text-gray-400 font-semibold";
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* left columns */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold"> {t.projects} </h2>
                <ul className="space-y-2">
                    {projects.map((project) => (
                        <li key={project.id}>
                            <button
                                onClick={() => handleProjectSelect(project.id)}
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
                <div ref={stickyElementRef} className="lg:sticky lg:top-4 lg:h-fit">
                    {selectedProject ? (
                        <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                            <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-wrap">
                                {t.project_descriptions[selectedProject as keyof typeof t.project_descriptions]}
                            </p>
                            <div className="mb-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    {language === 'en' ? 'Skills:' : 'Fähigkeiten:'}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    { projects.find(p => p.id === selectedProject)?.skills.map((skill, i) => (
                                        <span
                                        key={i}
                                        className={`px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-700 ${getSkillColor(skill)}`}
                                        >
                                            { skill.charAt(0).toUpperCase() + skill.slice(1) }
                                        </span>
                                    )) }
                                </div>
                            </div>
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