import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, GraduationCap, Users2, Sparkles, Heart, Lightbulb, Hourglass } from 'lucide-react';
import { STUDENT_PROFILE } from '../data';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section 
      id="about" 
      className="py-24 bg-slate-950 border-b border-slate-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/2 left-1/10 w-80 h-80 bg-violet-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center md:text-left mb-16">
          <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold mb-2 flex items-center justify-center md:justify-start">
            <GraduationCap className="h-4 w-4 mr-1.5 text-cyan-400" />
            01 . BACKGROUND & MOTIVATION
          </p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Jane Alyssa J. Pagbilao</span>
          </h2>
          <div className="h-1 w-20 bg-cyan-500 rounded mt-3 mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Biography Column (Left) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-slate-300">
            <h3 className="font-sans font-semibold text-xl text-white tracking-wide">
              Bridging code efficiency with functional UX systems
            </h3>
            
            <p className="text-sm sm:text-base leading-relaxed">
              Hey! I am a <strong>{STUDENT_PROFILE.currentYear}</strong> focusing majorly on systems integration, database safety, and dynamic client-side experiences at <strong>{STUDENT_PROFILE.college}</strong>. My love affair with IT began in high school, converting terminal scripts to custom mod game files. What began as gaming curiosity became my lifelong professional pursuit.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              As an Information Technology student, I don't just study abstract algorithms—I program tools targeting modern real-world struggles, like making class scheduling simpler or automating tedious inventory spreadsheets for local shops. I love the thrill of writing Node.js handlers and executing robust queries.
            </p>

            <p className="text-sm sm:text-base leading-relaxed pb-4 border-b border-slate-900">
              When I'm not studying or debugging code variables, you'll find me hosting coding bootcamp reviews for first-year lab peers, hacking in overnight weekend events, or compiling system configurations. I believe technology should serve people seamlessly, and I'm eager to join an engineering crew that builds for the future.
            </p>

            {/* Quick Fast Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-900 hover:border-slate-800 transition-colors">
                <span className="block font-mono text-2xl font-bold text-cyan-400">2.7</span>
                <span className="block font-sans text-xs text-slate-400 mt-1">Cumulative GPA</span>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-900 hover:border-slate-800 transition-colors">
                <span className="block font-mono text-2xl font-bold text-indigo-400">3rd Yr</span>
                <span className="block font-sans text-xs text-slate-400 mt-1">College Status</span>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-900 hover:border-slate-800 transition-colors">
                <span className="block font-mono text-2xl font-bold text-violet-400">12+</span>
                <span className="block font-sans text-xs text-slate-400 mt-1">Labs Built</span>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-900 hover:border-slate-800 transition-colors">
                <span className="block font-mono text-2xl font-bold text-pink-400">2028</span>
                <span className="block font-sans text-xs text-slate-400 mt-1">Grad Target</span>
              </div>
            </div>
          </div>

          {/* Personality Traits Column (Right) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <span className="font-mono text-xs text-indigo-400 font-semibold uppercase tracking-wider block">
              // Student Personality Matrix
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {STUDENT_PROFILE.traits.map((trait, index) => {
                const colors = [
                  "border-cyan-500/20 hover:border-cyan-400/40 focus:ring-cyan-400/30",
                  "border-indigo-500/20 hover:border-indigo-400/40 focus:ring-indigo-400/30",
                  "border-violet-500/20 hover:border-violet-400/40 focus:ring-violet-400/30",
                  "border-pink-500/20 hover:border-pink-400/40 focus:ring-pink-400/30"
                ];
                const markerColors = [
                  "bg-cyan-400",
                  "bg-indigo-400",
                  "bg-violet-400",
                  "bg-pink-400"
                ];

                return (
                  <div 
                    key={index} 
                    className={`p-5 rounded-2xl bg-slate-900/40 border ${colors[index]} transition-all hover:scale-[1.01] duration-300 flex items-start space-x-4`}
                  >
                    <div className="pt-1 flex-shrink-0">
                      <span className={`flex h-2.5 w-2.5 rounded-full ${markerColors[index]}`} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans font-semibold text-white text-base mb-1">
                        {trait.label}
                      </span>
                      <span className="font-sans text-xs text-slate-400 leading-relaxed">
                        {trait.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-900/40 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full" />
              <div className="flex items-center space-x-2 text-indigo-400 font-mono text-xs mb-2">
                <Lightbulb className="h-4 w-4 animate-bounce text-indigo-300" />
                <span>Academic Motto</span>
              </div>
              <p className="text-slate-300 text-xs italic leading-relaxed">
                "The only way to master computer technology is to configure environments yourself, break key systems, and systematically document how you solved it."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
