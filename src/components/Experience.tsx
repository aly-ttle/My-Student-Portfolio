import React, { useState } from 'react';
import { 
  Briefcase, Award, GitPullRequest, Code, Calendar, 
  MapPin, CheckCircle, Flame, Star, Trophy, ArrowUpRight, GraduationCap 
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data';

export default function Experience() {
  const [filterType, setFilterType] = useState<'all' | 'freelance' | 'leadership' | 'hackathon'>('all');

  const experienceTypes = [
    { id: 'all', label: 'All Activities' },
    { id: 'freelance', label: 'Freelance' },
    { id: 'leadership', label: 'Leadership / Academic' },
    { id: 'hackathon', label: 'Hackathons' },
  ];

  const filteredExperiences = filterType === 'all'
    ? EXPERIENCE_DATA
    : EXPERIENCE_DATA.filter(exp => exp.type === filterType);

  // Stats scoreboard values
  const studentMetrics = [
    { title: "Sprints Completed", value: "3+", icon: <Trophy className="h-4 w-4 text-amber-400" /> },
    { title: "Tech Tutoring Hours", value: "80+ Hours", icon: <GraduationCap className="h-4 w-4 text-cyan-400" /> },
    { title: "Dynamic Repos", value: "24", icon: <GitPullRequest className="h-4 w-4 text-rose-400" /> },
    { title: "Local Clients Served", value: "5", icon: <Star className="h-4 w-4 text-emerald-400" /> },
  ];

  return (
    <section 
      id="experience" 
      className="py-24 bg-slate-950 border-b border-secondary px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-semibold mb-2 flex items-center justify-center">
            <Briefcase className="h-4 w-4 mr-1.5 text-indigo-400" />
            05 . INITIATIVE & ENGAGEMENT
          </p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Activities & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Experiences</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm mt-2 max-w-lg mx-auto">
            Highlighting continuous growth, workshop instruction, rapid hackathons, and freelance commitments.
          </p>
          <div className="h-1 w-20 bg-indigo-500 rounded mt-4 mx-auto" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Timeline (Spans 8 cols) */}
          <div className="lg:col-span-8 space-y-8 flex flex-col text-left">
            
            {/* Timeline filtration bar */}
            <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-900">
              {experienceTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setFilterType(type.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                    filterType === type.id
                      ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/30'
                      : 'bg-slate-900/40 text-slate-400 border border-slate-900 hover:text-white'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {/* Timeline Cards Container */}
            <div className="space-y-6 relative before:absolute before:top-4 before:bottom-4 before:left-4 before:w-[1px] before:bg-slate-900">
              {filteredExperiences.map((exp, idx) => {
                // Select category specific borders
                let borderHighlight = "hover:border-cyan-500/30";
                let textAccent = "text-cyan-400";
                
                if (exp.type === 'leadership') {
                  borderHighlight = "hover:border-indigo-500/30";
                  textAccent = "text-indigo-400";
                } else if (exp.type === 'hackathon') {
                  borderHighlight = "hover:border-purple-500/30";
                  textAccent = "text-purple-400";
                }

                return (
                  <div 
                    key={idx}
                    className={`ml-10 relative bg-slate-900/20 p-5 sm:p-6 rounded-2xl border border-slate-900 hover:bg-slate-900/40 transition-all ${borderHighlight}`}
                  >
                    {/* Node Dot marker */}
                    <div className="absolute top-6 -left-10 h-5 w-5 bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center">
                      <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
                      <div className="text-left">
                        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">{exp.period}</span>
                        <h4 className="font-sans font-bold text-lg text-white mt-0.5 group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h4>
                        <p className="font-sans text-xs font-semibold text-slate-300 mt-1 flex items-center space-x-1">
                          <span className={`${textAccent}`}>{exp.organization}</span>
                        </p>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono border self-start bg-slate-950 border-slate-850 capitalize text-slate-400">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-slate-400 text-xs mt-3.5 font-sans leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Bullet achievement records */}
                    <div className="mt-4 space-y-2 border-t border-slate-900/60 pt-4">
                      {exp.bullets.map((bullet, bulletIdx) => (
                        <div key={bulletIdx} className="flex items-start space-x-2 text-xs text-slate-400 text-left">
                          <CheckCircle className={`h-4 w-4 ${textAccent} mt-0.5 flex-shrink-0`} />
                          <span className="font-sans leading-relaxed">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags footer */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {exp.tags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx}
                          className="px-2 py-0.5 bg-slate-950 text-[10px] text-slate-500 font-mono rounded"
                        >
                          #{tag.toLowerCase()}
                        </span>
                      ))}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Scorecard Grid (Spans 4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            <div className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800/80 text-left">
              <div className="flex items-center space-x-2 mb-4">
                <Flame className="h-5 w-5 text-indigo-400 animate-pulse" />
                <h4 className="font-sans font-semibold text-base text-white tracking-wide">
                  Impact Statistics
                </h4>
              </div>
              <p className="text-slate-400 text-xs font-sans leading-relaxed mb-6">
                Quantifiable metrics demonstrating commitment to studying, technical code ownership, peer community mentoring, and early client delivery.
              </p>

              {/* Stats metric blocks */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                {studentMetrics.map((metric, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-slate-950/60 border border-slate-900 rounded-xl flex items-center space-x-3.5 hover:border-slate-800 transition-colors"
                  >
                    <div className="p-2 bg-slate-900 rounded-lg border border-slate-850">
                      {metric.icon}
                    </div>
                    <div>
                      <span className="block font-sans text-[10px] text-slate-500">{metric.title}</span>
                      <span className="block font-mono font-bold text-base text-white mt-0.5">{metric.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Callout Block */}
            <div className="p-5 rounded-2xl bg-gradient-to-tr from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-900/35 relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full" />
              <Code className="h-6 w-6 text-cyan-400 mb-3" />
              <h5 className="font-sans font-semibold text-sm text-white">Full Sprints Code Repository</h5>
              <p className="text-slate-400 text-xs font-sans leading-relaxed mt-2">
                All class labs, personal automation scripts, and collaborative database templates reside publicly in my repository. Let's inspect code health directly.
              </p>
              <a 
                href="https://github.com/janealyssa-it"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-slate-950 hover:bg-slate-900 text-[11px] font-mono font-semibold rounded-lg border border-slate-850 hover:border-slate-750 text-cyan-300 flex items-center justify-center space-x-1 w-full"
              >
                <span>Visit github.com/janealyssa-it</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
