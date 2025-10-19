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
    kotlin: "text-purple-700 dark:text-purple-300 font-semibold",
    c: "text-cyan-600 dark:text-cyan-400 font-semibold",
    mips: "text-teal-600 dark:text-teal-400 font-semibold",
    postgresql: "text-blue-800 dark:text-blue-300 font-semibold",
    "express.js": "text-gray-700 dark:text-gray-300 font-semibold",
    "node.js": "text-green-600 dark:text-green-400 font-semibold",
    "nextauth.js": "text-purple-500 dark:text-purple-300 font-semibold",
    github: "text-gray-800 dark:text-gray-200 font-semibold",
    git: "text-orange-700 dark:text-orange-400 font-semibold",
    react: "text-cyan-500 dark:text-cyan-400 font-semibold",
    "next.js": "text-black dark:text-white font-semibold",
    "tailwind css": "text-cyan-600 dark:text-cyan-400 font-semibold",
    selenium: "text-green-700 dark:text-green-400 font-semibold",
};

// skill categories
const SKILL_CATEGORIES = {
    languages: {
        label: { en: 'Languages and Frameworks', ge: 'Programmiersprachen und Frameworks' },
        skills: 'Java / Rust / Kotlin / Javascript / Python / C / Scala / Chisel / OCaml / MIPS'
    },
    backend: {
        label: { en: 'Backend and Databases', ge: 'Backend und Datenbanken' },
        skills: 'PostgreSQL / Express.js / Node.js'
    },
    tools: {
        label: { en: 'Tools and Platforms', ge: 'Tools und Plattformen' },
        skills: 'NextAuth.js / Github / Git'
    },
    web: {
        label: { en: 'Web Developments and Frameworks', ge: 'Webentwicklung und Frameworks' },
        skills: 'React / Next.js / Tailwind CSS / Django'
    },
    testing: {
        label: { en: 'Testing & QA Tools', ge: 'Test- und QA-Tools' },
        skills: 'Selenium'
    }
};

export default function Projects({ language }: ProjectProps) {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const stickyElementRef = useRef<HTMLDivElement>(null);
    const t = translations[language];

    const projects = [
        {
            id: 'conc',
            name: t.project_list.concurrent,
            url: 'https://github.com/TheGuy-26/concurrent_virus_simulation/',
            skills: ['rust']
        },
        {
            id: 'bde',
            name: t.project_list.bde,
            url: 'https://github.com/ariv00001/BDE',
            skills: ['python', 'django']
        },
        {
            id: 'sys1',
            name: t.project_list.sys1,
            url: 'https://github.com/TheGuy-26/sysarch-project-1',
            skills: ['scala', 'chisel']
        },
        {
            id: 'sys2',
            name: t.project_list.sys2,
            url: 'https://github.com/TheGuy-26/sysarch-project-2',
            skills: ['RISC-V']
        },
        {
            id: 'ocaml',
            name: t.project_list.prog1,
            url: 'https://github.com/TheGuy-26/MiniOCaml',
            skills: ['ocaml']
        },
        {
            id: 'election',
            name: t.project_list.election_software,
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
        <div className="space-y-8">
            {/* Skills showcase section */}
            <div>
                <h2 className="text-xl font-semibold"> {t.skills}: </h2>
                <div className={`space-y-4`}>
                    {Object.entries(SKILL_CATEGORIES).map(([key, category]) => (
                        <div key={key}>
                            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                                {category.label[language]}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {category.skills.split(' / ').map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className={`${getSkillColor(skill.toLowerCase())} text-sm px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700`}
                                    >
                                    { skill }
                                </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Projects section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* left columns */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold"> {t.projects}: </h2>
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

                            {/* Skills section */}
                            <div className="mb-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    {language === 'en' ? 'Skills:' : 'Fähigkeiten:'}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {projects.find(p => p.id === selectedProject)?.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className={`px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-700 ${getSkillColor(skill)}`}
                                        >
                                            {skill.charAt(0).toUpperCase() + skill.slice(1)}
                                        </span>
                                    ))}
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
        </div>
    )
}