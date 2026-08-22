import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Monitor element thresholds on scroll inside viewport
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'];
    
    const handleScrollAndObserve = () => {
      const scrollPosition = window.scrollY + 200; // Offset checking

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollAndObserve);
    // Initial run
    handleScrollAndObserve();

    return () => window.removeEventListener('scroll', handleScrollAndObserve);
  }, []);

  const scrollToSection = (id: string) => {
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased scroll-behavior-smooth selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Scrollable Sticky Header */}
      <Header activeSection={activeSection} />

      {/* Main Structural Layout Sections */}
      <main className="w-full">
        {/* Section 1: Hero */}
        <Hero 
          onScrollTo={scrollToSection} 
          onOpenResumeModal={() => setResumeModalOpen(true)} 
        />

        {/* Section 2: About Me Background Story */}
        <About />

        {/* Section 3: Skill Repertoires */}
        <Skills />

        {/* Section 4: Projects Portfolio */}
        <Projects />

        {/* Section 5: Academic Credentials Info */}
        <Education />

        {/* Section 6: Initiatives and Experiences */}
        <Experience />

        {/* Section 7: Form Actions & Connects */}
        <Contact onOpenResumeModal={() => setResumeModalOpen(true)} />
      </main>

      {/* Styled Human Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="flex justify-center space-x-1.5 items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Seeking Junior Software Engineer Cooperations for Summer 2026</span>
          </div>
          <p className="font-sans text-xs">
            © {new Date().getFullYear()} Jane Alyssa J. Pagbilao. Designed and coded with React, Tailwind CSS, & Lucide Icons.
          </p>
          <div className="text-[10px] text-slate-600">
            Validated for secure SMTP simulated configurations. Standalone Core v1.4.2
          </div>
        </div>
      </footer>

      {/* Digital resume popup */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />
    </div>
  );
}
