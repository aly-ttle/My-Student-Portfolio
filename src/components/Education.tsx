import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, Presentation, CheckCircle2, Star, BadgeAlert } from 'lucide-react';
import { EDUCATION_DATA } from '../data';

export default function Education() {
  return (
    <section 
      id="education" 
      className="py-24 bg-slate-905 border-b border-slate-900 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-semibold mb-2 flex items-center justify-center">
            <GraduationCap className="h-4 w-4 mr-1.5 text-indigo-400" />
            04 . ACADEMIC BACKGROUND
          </p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Accomplishments</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded mt-3 mx-auto" />
        </div>

        {/* Structured Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main School Card (Left - Spans 7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/30 p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-slate-700/80 transition-colors text-left flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Enrollment Status</span>
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-white mt-1">
                    {EDUCATION_DATA.school}
                  </h3>
                  <p className="text-sm text-slate-300 font-sans font-medium mt-1">
                    {EDUCATION_DATA.degree}
                  </p>
                </div>
                
                <span className="hidden sm:inline-block px-3 py-1 bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono rounded-lg">
                  {EDUCATION_DATA.period}
                </span>
              </div>

              {/* Mobile Period element */}
              <div className="sm:hidden mt-2 text-xs font-mono text-slate-500">
                {EDUCATION_DATA.period}
              </div>

              {/* GPA display banner */}
              <div className="mt-5 p-4 rounded-xl bg-slate-950/60 border border-slate-900/80 flex items-center justify-between">
                <div>
                  <span className="block font-mono text-[10px] text-slate-500 uppercase">Current CGPA Score</span>
                  <span className="block font-mono font-bold text-lg text-emerald-400 mt-0.5">{EDUCATION_DATA.gpa}</span>
                </div>
                <div className="h-8 w-[1px] bg-slate-850" />
                <div>
                  <span className="block font-mono text-[10px] text-slate-500 uppercase">IT Major score</span>
                  <span className="block font-mono font-bold text-lg text-cyan-400 mt-0.5">3.92 / 4.00</span>
                </div>
                <div className="h-8 w-[1px] bg-slate-850 hidden sm:block" />
                <div className="hidden sm:block text-right">
                  <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] font-mono font-semibold text-emerald-400 uppercase tracking-widest">
                    Honors List
                  </span>
                </div>
              </div>
            </div>

            {/* Coursework list */}
            <div>
              <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono tracking-wider uppercase mb-3">
                <BookOpen className="h-4 w-4 text-cyan-400" />
                <span>Selected Core Coursework</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {EDUCATION_DATA.coursework.map((course, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg bg-slate-950/40 border border-slate-900 flex items-center space-x-2.5 hover:border-slate-850 transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-cyan-400/80 flex-shrink-0" />
                    <span className="text-xs text-slate-300 font-sans font-medium line-clamp-1">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications and Extras (Right - Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Certifications Listing Card */}
            <div className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700/80 transition-all text-left">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-5 w-5 text-indigo-400" />
                <h4 className="font-sans font-semibold text-base text-white tracking-wide">
                  Industry Credentials
                </h4>
              </div>

              <div className="space-y-4">
                {EDUCATION_DATA.certifications.map((cert, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 bg-slate-950/60 border border-slate-900 rounded-xl hover:border-slate-800 transition-colors flex items-start space-x-3.5"
                  >
                    <div className="p-1.5 bg-indigo-500/10 rounded-lg border border-indigo-500/20 text-indigo-400 mt-0.5 flex-shrink-0">
                      <Star className="h-4 w-4 fill-indigo-400" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-sans font-semibold text-xs text-white leading-tight truncate">
                        {cert.name}
                      </p>
                      <p className="font-mono text-[10px] text-slate-400 mt-1 flex items-center justify-between">
                        <span>{cert.issuer}</span>
                        <span className="text-slate-500 ml-2 flex-shrink-0">{cert.date}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Seminars & Workshops attended card */}
            <div className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700/80 transition-all text-left">
              <div className="flex items-center space-x-2 mb-4">
                <Presentation className="h-5 w-5 text-violet-400" />
                <h4 className="font-sans font-semibold text-base text-white tracking-wide">
                  Lectures, Workshops & Labs
                </h4>
              </div>

              <ul className="space-y-3 font-sans text-xs text-slate-300">
                {EDUCATION_DATA.seminars.map((seminar, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start space-x-2.5 border-l-2 border-slate-800 pl-3 leading-relaxed hover:border-cyan-400 transition-all py-0.5"
                  >
                    <span className="leading-snug">{seminar}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
