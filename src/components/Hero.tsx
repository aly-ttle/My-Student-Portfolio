import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ArrowRight, Download, Mail, Code, Database, Server, Cpu, ExternalLink } from 'lucide-react';
import { STUDENT_PROFILE } from '../data';

interface HeroProps {
  onScrollTo: (id: string) => void;
  onOpenResumeModal: () => void;
}

export default function Hero({ onScrollTo, onOpenResumeModal }: HeroProps) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const specializedTitles = [
    "Information Technology Major",
    "Full-Stack Web Developer",
    "Systems & Cloud Enthusiast",
    "Continuous Learner"
  ];
  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const DELAY_BETWEEN_TITLES = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = specializedTitles[taglineIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
      }, DELETING_SPEED);
    } else {
      timer = setTimeout(() => {
        setCurrentText(prev => fullWord.slice(0, prev.length + 1));
      }, TYPING_SPEED);
    }

    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), DELAY_BETWEEN_TITLES);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % specializedTitles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, taglineIndex]);

  // Command input log simulations
  const [commandLog, setCommandLog] = useState<string[]>([
    "systems_check --status",
    "Initializing IT credential telemetry...",
    "GPA................. 3.85 / 4.00",
    "Git Account......... Host connected",
    "Web Developer....... Ready"
  ]);

  const [inputCommand, setInputCommand] = useState("");
  const executeSimulatedCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCommand.trim()) return;
    const cleanCmd = inputCommand.trim();
    let reply = "";
    
    if (cleanCmd.toLowerCase() === 'help') {
      reply = "COMMANDS: contact, skills, stats, clean";
    } else if (cleanCmd.toLowerCase() === 'contact') {
      reply = `Email: ${STUDENT_PROFILE.socials.email} | Phone: ${STUDENT_PROFILE.socials.phone}`;
    } else if (cleanCmd.toLowerCase() === 'skills') {
      reply = "Top: React, Node.js, Python, MySQL, Git";
    } else if (cleanCmd.toLowerCase() === 'stats') {
      reply = "Level: Junior (3rd Year) | Coursework: Sys Architecture, DB Management";
    } else if (cleanCmd.toLowerCase() === 'clean' || cleanCmd.toLowerCase() === 'clear') {
      setCommandLog([]);
      setInputCommand("");
      return;
    } else {
      reply = `Command not found: '${cleanCmd}'. Type 'help' for student tools.`;
    }

    setCommandLog(prev => [...prev, `visitor@janealyssa-it ~ % ${cleanCmd}`, reply]);
    setInputCommand("");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 px-4 sm:px-6 lg:px-8 border-b border-slate-900"
    >
      {/* Dynamic Keyframe Particle Mesh (Pure High Performant CSS) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse duration-10000" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse duration-10000 delay-5000" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          
          {/* Badge */}
          <div className="flex items-center space-x-2 bg-slate-900/90 border border-slate-800 rounded-full px-3.5 py-1.5 self-start shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs text-slate-300 font-semibold uppercase tracking-wider">
              {STUDENT_PROFILE.currentYear} • Seeking Internships
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500">{STUDENT_PROFILE.name}</span>
          </h1>

          {/* Animated Specialization Typing Container */}
          <div className="h-10 sm:h-12 flex items-center">
            <p className="font-mono text-lg sm:text-xl md:text-2xl text-cyan-300 flex items-center font-semibold">
              <span className="mr-2 text-slate-500 font-normal">~/</span>
              {currentText}
              <span className="w-1.5 h-6 bg-cyan-400 ml-1.5 animate-pulse inline-block" />
            </p>
          </div>

          {/* Persona Tagline */}
          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed font-sans font-normal">
            {STUDENT_PROFILE.tagline}
          </p>

          {/* Primary Calls-to-Action */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => onScrollTo('projects')}
              className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-sm text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20 hover:scale-103 transition-all cursor-pointer flex items-center justify-center space-x-2 group-hover:bg-slate-300"
            >
              <span>View My Projects</span>
              <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenResumeModal}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-sm text-slate-200 font-semibold rounded-xl transition-all hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Download className="h-4 w-4 text-cyan-400" />
              <span>Full Resume PDF</span>
            </button>

            <button
              onClick={() => onScrollTo('contact')}
              className="px-6 py-3.5 bg-transparent hover:bg-slate-900/60 text-sm text-slate-300 hover:text-white font-semibold rounded-xl transition-all border border-slate-800 hover:border-slate-700 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Mail className="h-4 w-4 text-violet-400" />
              <span>Contact Contact</span>
            </button>
          </div>

          {/* Floating tech mini pills */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-900 text-xs text-slate-500 font-mono">
            <span className="flex items-center"><Code className="h-3 ml-0.5 mr-1 text-cyan-400" /> WebDev</span>
            <span className="flex items-center"><Database className="h-3 ml-0.5 mr-1 text-indigo-400" /> MySQL</span>
            <span className="flex items-center"><Server className="h-3 ml-0.5 mr-1 text-violet-400" /> Nodes / Python</span>
            <span className="flex items-center"><Cpu className="h-3 ml-0.5 mr-1 text-pink-400" /> Systems</span>
          </div>
        </div>

        {/* Hero Right Visual: High Tech Interactive Student Terminal Dashboard */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md h-[340px] sm:h-[380px] bg-slate-950/90 rounded-2xl border border-slate-800 shadow-2xl shadow-indigo-500/5 overflow-hidden flex flex-col group/terminal hover:border-slate-700/80 transition-colors">
            {/* Terminal Header */}
            <div className="bg-slate-900/80 px-4 py-3 border-b border-slate-900 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="font-mono text-xs text-slate-400 tracking-wide font-medium flex items-center space-x-1">
                <span>jane_pagbilao_core.bash</span>
              </span>
              <div className="w-4 h-4 rounded flex items-center justify-center bg-slate-800 text-[10px] text-slate-400 hover:text-white cursor-pointer select-none">
                ?
              </div>
            </div>

            {/* Terminal Console Logs */}
            <div className="p-4 flex-1 font-mono text-xs text-slate-300 overflow-y-auto space-y-2 flex flex-col select-text scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-950">
              <div className="text-slate-500 italic pb-1">
                // ISPSC Tagudin Academic Terminal v1.4.2
              </div>
              
              {commandLog.map((log, idx) => {
                if (log.startsWith("//") || log.startsWith("COMMANDS") || log.startsWith("COMMANDS:") || log.startsWith("COMMAND") || log.startsWith("top:") || log.startsWith("Email:") || log.startsWith("Level:")) {
                  return (
                    <div key={idx} className="text-cyan-400/90 border-l border-slate-800 pl-2 leading-relaxed">
                      {log}
                    </div>
                  );
                } else if (log.startsWith("visitor@janealyssa-it") || log.startsWith("systems_check")) {
                  return (
                    <div key={idx} className="text-slate-400 font-semibold mt-1">
                      <span className="text-indigo-400 font-bold">visitor@janealyssa-it ~ %</span> {log.replace("visitor@janealyssa-it ~ % ", "")}
                    </div>
                  );
                } else if (log.includes("Command not found")) {
                  return (
                    <div key={idx} className="text-red-400 italic">
                      {log}
                    </div>
                  );
                } else {
                  return (
                    <div key={idx} className="text-slate-300">
                      {log}
                    </div>
                  );
                }
              })}
            </div>

            {/* Command Input Area */}
            <form 
              onSubmit={executeSimulatedCommand}
              className="bg-slate-900 border-t border-slate-900/80 px-4 py-3 flex items-center space-x-2"
            >
              <span className="font-mono text-xs text-indigo-400 font-bold">~ %</span>
              <input
                type="text"
                value={inputCommand}
                onChange={(e) => setInputCommand(e.target.value)}
                placeholder="Type 'help' and press Enter..."
                className="bg-transparent border-none outline-none flex-1 font-mono text-xs text-cyan-300 focus:ring-0 placeholder-slate-600"
              />
              <button 
                type="submit"
                className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-[10px] text-slate-400 font-mono tracking-tight cursor-pointer"
              >
                EXEC
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
