import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, Github, ExternalLink, HelpCircle, 
  ChevronRight, Calendar, Bookmark, Briefcase, Eye, X, Check, Star 
} from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'database' | 'fullstack'>('all');
  const [inspectedProjectId, setInspectedProjectId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend client' },
    { id: 'database', label: 'Database focused' },
    { id: 'fullstack', label: 'Full-Stack Labs' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  const activeProject = PROJECTS_DATA.find(p => p.id === inspectedProjectId);

  return (
    <section 
      id="projects" 
      className="py-24 bg-slate-950 border-b border-slate-900 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left">
            <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold mb-2 flex items-center">
              <FolderGit2 className="h-4 w-4 mr-1.5 text-cyan-400" />
              03 . CASE STUDIES & CODEBASES
            </p>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Projects</span>
            </h2>
            <p className="text-slate-400 font-sans text-sm mt-2 max-w-md">
              A curated collection of systems coursework, utility calculators, relational databases, and dynamic web prototypes.
            </p>
          </div>

          {/* Filtering switches */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900/40 rounded-2xl border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between overflow-hidden group hover:shadow-cyan-950/20 hover:shadow-2xl h-[460px]"
              >
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden bg-slate-950 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-102 group-hover:scale-108 transition-transform duration-500 filter brightness-90 grayscale-[15%] group-hover:brightness-100 group-hover:grayscale-0"
                  />
                  {/* Category Pill overlay */}
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded bg-slate-950/90 text-[10px] font-mono text-cyan-400 capitalize border border-slate-800">
                    {project.category}
                  </span>
                  
                  {/* Role Detail Overlay preview on hover */}
                  <div className="absolute inset-0 z-20 bg-slate-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <div className="text-center">
                      <p className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest font-semibold">Academic Assignment</p>
                      <h4 className="text-white text-sm font-sans font-bold mt-1 mb-2">{project.role}</h4>
                      <button 
                        onClick={() => setInspectedProjectId(project.id)}
                        className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded text-[11px] font-semibold flex items-center mx-auto space-x-1 cursor-pointer"
                      >
                        <Eye className="h-3 w-3" />
                        <span>Inspect Architecture</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-bold text-lg text-white leading-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs mt-2 line-clamp-3 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    {/* Tech List Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 4).map(tag => (
                        <span 
                          key={tag} 
                          className="px-2 py-0.5 rounded-md bg-slate-950 text-[10px] text-slate-400 font-mono border border-slate-900"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-950 text-[10px] text-slate-500 font-mono">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-900 text-xs">
                      <button
                        onClick={() => setInspectedProjectId(project.id)}
                        className="text-cyan-400 hover:text-cyan-300 font-sans font-medium flex items-center space-x-1 cursor-pointer"
                      >
                        <span>Details</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>

                      <div className="flex space-x-3 text-slate-400">
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub Source"
                          className="hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
                        >
                          <Github className="h-4.5 w-4.5" />
                        </a>
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Live Prototype"
                            className="hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
                          >
                            <ExternalLink className="h-4.5 w-4.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Overlay for Project Inspections */}
        <AnimatePresence>
          {inspectedProjectId && activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setInspectedProjectId(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              />

              {/* Box Dialog */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25 }}
                className="relative bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl shadow-cyan-500/5 flex flex-col pointer-events-auto"
              >
                {/* Image & Banner Header */}
                <div className="relative h-56 bg-slate-950 w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                  <img 
                    src={activeProject.imageUrl} 
                    alt={activeProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-85"
                  />
                  <button 
                    onClick={() => setInspectedProjectId(null)}
                    className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-400 hover:text-white border border-slate-800 cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-4 left-6 right-6 z-20">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[10px] font-mono capitalize">
                      {activeProject.category} Case Study
                    </span>
                    <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mt-1.5">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 text-left">
                  
                  {/* Scope Roles Metadata */}
                  <div className="grid grid-cols-2 gap-4 pb-5 border-b border-slate-800">
                    <div>
                      <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest">My Assignment Role</span>
                      <span className="block text-sm font-sans font-semibold text-white mt-0.5">{activeProject.role}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest">Learning Difficulty</span>
                      <span className="block text-sm font-sans font-semibold text-cyan-400 mt-0.5">{activeProject.difficulty}</span>
                    </div>
                  </div>

                  {/* Comprehensive narrative */}
                  <div>
                    <h4 className="font-mono text-xs text-indigo-400 font-bold uppercase tracking-wider mb-2">
                      // Implementation Narrative & Hurdles
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-sans">
                      {activeProject.longDescription}
                    </p>
                  </div>

                  {/* Custom features item lists */}
                  <div>
                    <h4 className="font-mono text-xs text-indigo-400 font-bold uppercase tracking-wider mb-3">
                      // Architectural Attributes & Accomplishments
                    </h4>
                    <div className="space-y-2.5">
                      {activeProject.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-sm text-slate-400 text-left">
                          <Check className="h-4.5 w-4.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="font-sans leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used footer */}
                  <div>
                    <h4 className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-2">
                      Technologies Leveraged
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-2.5 py-1 rounded bg-slate-950 text-xs text-slate-300 font-mono border border-slate-800/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-800">
                    <a 
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-slate-950 hover:bg-slate-900 text-xs font-semibold rounded-lg border border-slate-850 hover:border-slate-750 text-white flex items-center justify-center space-x-1.5 flex-1"
                    >
                      <Github className="h-4 w-4 text-cyan-400" />
                      <span>Explore Repository Code</span>
                    </a>
                    {activeProject.liveUrl && (
                      <a 
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-xs text-white font-semibold rounded-lg flex items-center justify-center space-x-1.5 flex-1 shadow-md shadow-cyan-500/10"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Launch Online Demo</span>
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
