import { useState, useRef } from "react";
import { translations } from "../translations";
import { Link } from "react-router-dom";

interface ProjectsPageProps {
    language: 'en' | 'ge'
}

// Constants
const SCROLL_DELAY_MS = 100;
const MOBILE_BREAKPOINT = 1024;

// skill categories
const SKILL_CATEGORIES = {
    languages: {
        label: { en: 'Languages and Frameworks', ge: 'Programmiersprachen und Frameworks' },
        skills: 'Javascript / Typescript / Java / Python / Kotlin / Rust / C / Scala / Chisel / OCaml / MIPS'
    },
    backend: {
        label: { en: 'Backend and Databases', ge: 'Backend und Datenbanken' },
        skills: 'PostgreSQL'
    },
    tools: {
        label: { en: 'Tools and Platforms', ge: 'Tools und Plattformen' },
        skills: 'Github / Git / Selenium'
    },
    web: {
        label: { en: 'Web Developments and Frameworks', ge: 'Webentwicklung und Frameworks' },
        skills: 'React / Next.js / Tailwind CSS / Django'
    }
};

export default function ProjectsPage({ language }: ProjectsPageProps) {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const stickyElementRef = useRef<HTMLDivElement>(null);
    const t = translations[language];

    const projects = [
        {
            id: 'tictactoe',
            name: t.project_list.tictactoe,
            skills: ['react', 'typescript', 'tailwind-css', 'reinforcement learning'],
            isInteractive: true
        },
        {
            id: 'sopra24',
            name: t.project_list.sopra24,
            skills: ['kotlin', 'system-testing', 'unit-testing', 'integration-testing']
        },
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

    return (
        <div className="space-y-8">
            {/* Skills Section - Terminal Style */}
            <div className="space-y-4">
                <div className="flex items-start gap-2">
                    <span className="text-green-500">$</span>
                    <span className="text-green-400">ls skills/</span>
                </div>
                <div className="ml-6 space-y-3">
                    {Object.entries(SKILL_CATEGORIES).map(([key, category]) => (
                        <div key={key} className="space-y-2">
                            <div className="text-cyan-400 text-sm">
                                <span className="text-green-500">→</span> {category.label[language]}
                            </div>
                            <div className="ml-4 flex flex-wrap gap-2">
                                {category.skills.split(' / ').map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Projects Section - Terminal Style */}
            <div className="space-y-6">
                <div className="flex items-start gap-2">
                    <span className="text-green-500">$</span>
                    <span className="text-green-400">cat projects.txt</span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Project List - Left Side */}
                    <div className="lg:col-span-1 space-y-2">
                        <div className="text-cyan-400 text-sm mb-3">
                            <span className="text-green-500">→</span> {t.projects}
                        </div>
                        <div className="space-y-1">
                            {projects.map((project, idx) => (
                                <button
                                    key={project.id}
                                    onClick={() => handleProjectSelect(project.id)}
                                    className={`w-full text-left px-3 py-2 border transition-all ${
                                        selectedProject === project.id
                                            ? 'border-green-500 bg-green-500/10 text-green-300'
                                            : 'border-green-500/30 text-green-400/70 hover:border-green-500/50 hover:bg-green-500/5'
                                    }`}
                                >
                                    <span className="text-green-500 mr-2">[{idx + 1}]</span>
                                    <span className="text-sm">{project.name}</span>
                                    {project.isInteractive && (
                                        <span className="ml-2 text-xs text-cyan-400">[interactive]</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Project Details - Right Side */}
                    <div className="lg:col-span-2">
                        <div ref={stickyElementRef} className="lg:sticky lg:top-4">
                            {selectedProject ? (
                                selectedProject === 'tictactoe' ? (
                                    <div className="border border-green-500/30 bg-black/50">
                                        <div className="p-4 border-b border-green-500/30 bg-green-500/5">
                                            <div className="flex items-start gap-2 mb-3">
                                                <span className="text-green-500">$</span>
                                                <span className="text-green-400">cat {selectedProject}.md</span>
                                            </div>
                                            <p className="text-green-300/80 text-sm leading-relaxed mb-4 whitespace-pre-wrap">
                                                {t.project_descriptions[selectedProject as keyof typeof t.project_descriptions]}
                                            </p>
                                            <div className="mb-4">
                                                <div className="text-cyan-400 text-xs mb-2">
                                                    <span className="text-green-500">→</span> {t.skills}:
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {projects.find(p => p.id === selectedProject)?.skills.map((skill, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="text-xs px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-300"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-green-500/30">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-green-500">$</span>
                                                    <Link
                                                        to="/tictactoe"
                                                        className="text-cyan-400 hover:text-cyan-300 underline text-sm"
                                                    >
                                                        ./tic-tac-toe-rl
                                                    </Link>
                                                </div>
                                                <div className="ml-6 mt-2 text-xs text-green-400/70">
                                                    {t.launch_interactive}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="border border-green-500/30 bg-black/50 p-4">
                                        <div className="flex items-start gap-2 mb-3">
                                            <span className="text-green-500">$</span>
                                            <span className="text-green-400">cat {selectedProject}.md</span>
                                        </div>
                                        <p className="text-green-300/80 text-sm leading-relaxed mb-4 whitespace-pre-wrap">
                                            {t.project_descriptions[selectedProject as keyof typeof t.project_descriptions]}
                                        </p>
                                        
                                        <div className="mb-4">
                                            <div className="text-cyan-400 text-xs mb-2">
                                                <span className="text-green-500">→</span> {t.skills}:
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {projects.find(p => p.id === selectedProject)?.skills.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-xs px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-300"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {projects.find(p => p.id === selectedProject)?.url && (
                                            <div className="flex items-start gap-2">
                                                <span className="text-green-500">$</span>
                                                <a
                                                    href={projects.find(p => p.id === selectedProject)?.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-cyan-400 hover:text-cyan-300 underline text-sm"
                                                >
                                                    open {projects.find(p => p.id === selectedProject)?.url}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                )
                            ) : (
                                <div className="border border-green-500/30 bg-black/50 p-8 text-center">
                                    <div className="text-green-400/50 text-sm">
                                        <span className="text-green-500">$</span> {t.select_project}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
