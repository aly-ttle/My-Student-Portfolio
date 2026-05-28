import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles } from 'lucide-react';
import { STUDENT_PROFILE } from '../data';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Experience', id: 'experience' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/75 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-slate-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Student Brand */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/10 transition-transform group-hover:scale-105">
              <div className="h-full w-full rounded-[11px] bg-slate-900 flex items-center justify-center">
                <Terminal className="h-5 w-5 text-cyan-400 group-hover:text-violet-400 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {STUDENT_PROFILE.name}
              </span>
              <span className="font-mono text-[10px] text-slate-400 tracking-wider uppercase">
                IT PORTFOLIO
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-btn-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-cyan-300'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Hire Me Indicator */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-xs text-white font-semibold rounded-lg shadow-md hover:shadow-cyan-500/10 hover:scale-102 transition-all cursor-pointer flex items-center space-x-1.5 border border-cyan-400/20"
            >
              <span>Available for Internship</span>
              <Sparkles className="h-3 ml-0.5 animate-pulse text-yellow-300" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-1 rounded-md hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100 border-b border-slate-800' : 'max-h-0 opacity-0'
        } bg-slate-950/95 backdrop-blur-lg`}
      >
        <div className="px-3 pt-2 pb-6 space-y-1.5 flex flex-col sm:px-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-slate-800/80 text-cyan-300 border-l-2 border-cyan-400 pl-3'
                  : 'text-slate-300 hover:bg-slate-900 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 px-4 flex items-center justify-between">
            <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Seeking Summer 2026 roles</span>
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg border border-slate-700 text-cyan-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
