import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, FileCode, Palette, Globe, Layers, Terminal, 
  Coffee, Database, HardDrive, GitBranch, Cpu, Server, 
  FileText, Users, MessageSquare, Flame, CheckCircle, Info
} from 'lucide-react';
import { SKILLS_DATA } from '../data';
import { Skill } from '../types';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tools' | 'soft-skills'>('all');

  const categories = [
    { id: 'all', label: 'All Tech Standards' },
    { id: 'frontend', label: 'Frontend UI' },
    { id: 'backend', label: 'Backend Systems' },
    { id: 'database', label: 'Databases & Schemas' },
    { id: 'tools', label: 'DevOps & Tools' },
    { id: 'soft-skills', label: 'Professional Skills' },
  ];

  // Helper mapping icon string names to actual Lucide node assets
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2": return <Code2 className="h-4 w-4" />;
      case "FileCode": return <FileCode className="h-4 w-4" />;
      case "Palette": return <Palette className="h-4 w-4" />;
      case "Globe": return <Globe className="h-4 w-4" />;
      case "Layers": return <Layers className="h-4 w-4" />;
      case "Terminal": return <Terminal className="h-4 w-4" />;
      case "Coffee": return <Coffee className="h-4 w-4" />;
      case "Database": return <Database className="h-4 w-4" />;
      case "HardDrive": return <HardDrive className="h-4 w-4" />;
      case "GitBranch": return <GitBranch className="h-4 w-4" />;
      case "Cpu": return <Cpu className="h-4 w-4" />;
      case "Server": return <Server className="h-4 w-4" />;
      case "FileText": return <FileText className="h-4 w-4" />;
      case "Users": return <Users className="h-4 w-4" />;
      case "MessageSquare": return <MessageSquare className="h-4 w-4" />;
      default: return <Cpu className="h-4 w-4" />;
    }
  };

  const filteredSkills = selectedCategory === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === selectedCategory);

  return (
    <section 
      id="skills" 
      className="py-24 bg-slate-900/60 border-b border-slate-900 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-semibold mb-2 flex items-center justify-center">
            <Cpu className="h-4 w-4 mr-1.5 text-indigo-400 animate-spin-slow" />
            02 . REPERTOIRE & COMPETENCY
          </p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Skills Matrix</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm mt-2 max-w-lg mx-auto">
            A comprehensive breakdown of conceptual systems, languages, and agile collaboration frameworks.
          </p>
          <div className="h-1 w-20 bg-indigo-500 rounded mt-4 mx-auto" />
        </div>

        {/* Category Filtration Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-violet-500/15 text-cyan-300 border border-cyan-400/40 shadow-md shadow-cyan-400/5'
                  : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              // Decide dynamic skill group theme lines
              let strokeTheme = "from-cyan-400 to-blue-500";
              let textTheme = "text-cyan-400";
              let badgeBg = "bg-cyan-500/10 text-cyan-300 border-cyan-500/20";
              
              if (skill.category === 'backend') {
                strokeTheme = "from-indigo-400 to-violet-500";
                textTheme = "text-indigo-400";
                badgeBg = "bg-indigo-500/10 text-indigo-300 border-indigo-500/20";
              } else if (skill.category === 'database') {
                strokeTheme = "from-violet-400 to-purple-500";
                textTheme = "text-violet-400";
                badgeBg = "bg-violet-500/10 text-violet-300 border-violet-500/20";
              } else if (skill.category === 'tools') {
                strokeTheme = "from-pink-400 to-rose-500";
                textTheme = "text-pink-400";
                badgeBg = "bg-pink-500/10 text-pink-300 border-pink-500/20";
              } else if (skill.category === 'soft-skills') {
                strokeTheme = "from-emerald-400 to-teal-500";
                textTheme = "text-emerald-400";
                badgeBg = "bg-emerald-500/10 text-emerald-300 border-emerald-500/20";
              }

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80 hover:border-slate-700/80 hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col justify-between group h-40"
                >
                  {/* Card Front Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 group-hover:${textTheme} transition-colors`}>
                        {getSkillIcon(skill.icon)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans font-semibold text-white tracking-wide text-sm group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[9px] text-slate-500 tracking-wider uppercase mt-0.5">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Badge Level */}
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${badgeBg}`}>
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Rating Description */}
                  <div className="flex items-center text-[10px] text-slate-400 font-mono space-x-1 mt-1 font-medium">
                    <CheckCircle className={`h-3 w-3 ${textTheme} flex-shrink-0`} />
                    <span className="truncate">{skill.level}</span>
                  </div>

                  {/* Skill Competency Slider */}
                  <div className="w-full mt-4">
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-slate-800">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${strokeTheme}`}
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Learning Hub Advice Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950/40 border border-slate-800/60 flex flex-col md:flex-row items-start md:items-center justify-between text-left gap-4">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 mt-0.5 md:mt-0 flex-shrink-0">
              <Flame className="h-4.5 w-4.5 animate-pulse text-indigo-400" />
            </div>
            <div>
              <p className="font-sans text-xs font-semibold text-white tracking-wide">
                Currently Learning Stack Update
              </p>
              <p className="font-sans text-xs text-slate-400 mt-1 max-w-xl leading-relaxed">
                Aiming to broaden full-stack architecture through Dockerized microservices and automated CI/CD workflows inside AWS clusters.
              </p>
            </div>
          </div>
          <div className="flex space-x-2 w-full md:w-auto">
            <span className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-mono text-slate-300">
              Docker configs
            </span>
            <span className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-mono text-slate-300">
              AWS EC2/S3
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
