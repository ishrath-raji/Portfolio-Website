import { useEffect, useCallback } from 'react';
import { LuX, LuCalendar, LuGlobe, LuExternalLink } from 'react-icons/lu';

export default function ProjectModal({ project, onClose }) {
    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === 'Escape') onClose();
        },
        [onClose]
    );

    useEffect(() => {
        if (!project) return;

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [project, handleKeyDown]);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-white dark:bg-slate-800 rounded-2xl shadow-xl animate-in zoom-in-95 duration-200 border border-slate-200/60 dark:border-slate-600/40"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    aria-label="Close modal"
                >
                    <LuX size={18} />
                </button>

                {/* Header image */}
                {project.image && (
                    <div className="h-48 overflow-hidden flex items-center justify-center bg-slate-50 dark:bg-slate-700 rounded-t-2xl p-6 border-b border-slate-200/50 dark:border-slate-600/50 shrink-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                )}

                {/* Content */}
                <div className="p-7 flex flex-col min-h-0">
                    {/* Title & timeline */}
                    <div className="mb-1 shrink-0">
                        <h2 className="text-xl font-bold">{project.title}</h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-slate-500 dark:text-slate-400 shrink-0">
                        {project.timeline && (
                            <span className="flex items-center gap-1.5">
                                <LuCalendar size={14} />
                                {project.timeline}
                            </span>
                        )}
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-primary hover:underline"
                            >
                                <LuGlobe size={14} />
                                Visit site
                                <LuExternalLink size={12} />
                            </a>
                        )}
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 shrink-0">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5 shrink-0">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary dark:text-violet-200 dark:bg-violet-500/15"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Detailed bullet points — scrollable */}
                    {project.details && project.details.length > 0 && (
                        <div className="border-t border-slate-200/60 dark:border-slate-600/40 overflow-y-auto min-h-0">
                            <h3 className="text-sm font-bold pt-5 pb-3 mb-0 text-slate-700 dark:text-slate-200 sticky top-0 bg-white dark:bg-slate-800">
                                Highlights & Contributions
                            </h3>
                            <ul className="space-y-2.5">
                                {project.details.map((detail, i) => (
                                    <li
                                        key={i}
                                        className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                                    >
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
